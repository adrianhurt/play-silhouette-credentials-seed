package models

import utils.silhouette.IdentitySilhouette
import com.mohiva.play.silhouette.impl.util.BCryptPasswordHasher
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

case class User(
    id: Option[Long],
    email: String,
    emailConfirmed: Boolean,
    password: String,
    nick: String,
    firstName: String,
    lastName: String,
    /*
	* A user can register some accounts from third-party services, then it will have access to different parts of the webpage. The 'master' privilege has full access.
	* Ex: ("master") -> full access to every point of the webpage.
	* Ex: ("serviceA") -> have access only to general and serviceA areas.
	* Ex: ("serviceA", "serviceB") -> have access only to general, serviceA and serviceB areas.
	*/
		services: List[String]) extends IdentitySilhouette {
  def key = email
  def fullName: String = firstName + " " + lastName
}

object User {
	
	val services = Seq("serviceA", "serviceB", "serviceC")

  val users = scala.collection.mutable.HashMap[Long, User](
    1L -> User(Some(1L), "master@myweb.com", true, (new BCryptPasswordHasher()).hash("123123").password, "Eddy", "Eddard", "Stark", List("master")),
    2L -> User(Some(2L), "a@myweb.com", true, (new BCryptPasswordHasher()).hash("123123").password, "Maggy", "Margaery", "Tyrell", List("serviceA")),
    3L -> User(Some(3L), "b@myweb.com", true, (new BCryptPasswordHasher()).hash("123123").password, "Petyr", "Petyr", "Baelish", List("serviceB")),
    4L -> User(Some(4L), "a_b@myweb.com", true, (new BCryptPasswordHasher()).hash("123123").password, "Tyry", "Tyrion", "Lannister", List("serviceA", "serviceB"))
  )

  def findByEmail(email: String): Future[Option[User]] = Future.successful(users.find(_._2.email == email).map(_._2))
  //	def findByEmailMap[A] (email: String)(f: User => A): Future[Option[A]] = findByEmail(email).map(_.map(f))

  def save(user: User): Future[User] = {
    // A rudimentary auto-increment feature...
    def nextId: Long = users.maxBy(_._1)._1 + 1

    val theUser = if (user.id.isDefined) user else user.copy(id = Some(nextId))
    users += (theUser.id.get -> theUser)
    Future.successful(theUser)
  }

  def remove(email: String): Future[Unit] = findByEmail(email).map(_.map(u => users.remove(u.id.get)))
}
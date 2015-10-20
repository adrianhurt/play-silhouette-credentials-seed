package utils.silhouette

import models.MailTokenUser
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

trait MailTokenService[T <: MailToken] {
  def create(token: T): Future[Option[T]]
  def retrieve(id: String): Future[Option[T]]
  def consume(id: String): Unit
}

class MailTokenUserService extends MailTokenService[MailTokenUser] {
  def create(token: MailTokenUser): Future[Option[MailTokenUser]] = {
    MailTokenUser.save(token).map(Some(_))
  }
  def retrieve(id: String): Future[Option[MailTokenUser]] = {
    MailTokenUser.findById(id)
  }
  def consume(id: String): Unit = {
    MailTokenUser.delete(id)
  }
}
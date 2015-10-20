package utils.silhouette

import models.User
import com.mohiva.play.silhouette.api.Silhouette
import com.mohiva.play.silhouette.impl.authenticators.CookieAuthenticator
import play.api.i18n.I18nSupport

trait AuthenticationController extends Silhouette[User, CookieAuthenticator] with I18nSupport {
  def env: AuthenticationEnvironment
  implicit def securedRequest2User[A](implicit request: SecuredRequest[A]): User = request.identity
  implicit def userAwareRequest2UserOpt[A](implicit request: UserAwareRequest[A]): Option[User] = request.identity
}
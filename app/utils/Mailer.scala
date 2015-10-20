package utils

import models.User
import play.twirl.api.Html
import play.api.i18n.Messages
import views.html.mails

object Mailer {

  implicit def html2String(html: Html): String = html.toString

  def welcome(user: User, link: String)(implicit ms: MailService, m: Messages) {
    ms.sendEmailAsync(user.email)(
      subject = Messages("mail.welcome.subject"),
      bodyHtml = mails.welcome(user.firstName, link),
      bodyText = mails.welcomeTxt(user.firstName, link)
    )
  }

  def forgotPassword(email: String, link: String)(implicit ms: MailService, m: Messages) {
    ms.sendEmailAsync(email)(
      subject = Messages("mail.forgotpwd.subject"),
      bodyHtml = mails.forgotPassword(email, link),
      bodyText = mails.forgotPasswordTxt(email, link)
    )
  }

}
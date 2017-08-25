## Play Silhouette Credentials Seed [Play 2.5 - Scala]

This project tries to be an example of how to implement an Authentication and Authorization layer using the [Silhouette authentication library](https://www.silhouette.rocks/).

This template only show you how to implement a credential authentication, but it's easy to add the social authentication as well seeing the [Silhouette documentation](https://www.silhouette.rocks/docs) and other templates like [these](https://www.silhouette.rocks/docs/examples).

It implements the typical authentication and authorization functionality based on roles. You can:

* Sign up (with email confirmation)
* Sign in (with remember me)
* Sign out
* Change password
* Reset password (via email)
* Control of public and private areas
* Restrict areas to those users whose roles match with the specified ones (with logic `OR` or `AND`)


And please, don't forget starring this project if you consider it has been useful for you.

Also check my other projects:

* [Play Multidomain Auth [Play 2.5 - Scala]](https://github.com/adrianhurt/play-multidomain-auth)
* [Play Multidomain Seed [Play 2.5 - Scala]](https://github.com/adrianhurt/play-multidomain-seed)
* [Play-Bootstrap - Play library for Bootstrap [Scala & Java]](https://adrianhurt.github.io/play-bootstrap)
* [Play API REST Template [Play 2.5 - Scala]](https://github.com/adrianhurt/play-api-rest-seed)

### First of all: configure the Mail Plugin

I've used the [Mailer plugin](https://github.com/playframework/play-mailer) to send an email to the user for resetting passwords and email confirmation. For development it's configured to simply print the output to the console (with `play.mailer.mock=true` configuration). But to send real emails you need to set your smtp parameters in the configuration file.

For example, for a gmail email address:

    play.mailer {
      host=smtp.gmail.com
      port=465
      user="your@gmail.com"
      password=yourpassword
      ssl=true
      from="your@gmail.com"
      mock=false
    }

I've implemented `MailService` and `Mailer` to get it easier to use.

### Silhouette

All the authentication and authorization functionalities are implemented using the [Silhouette authentication library](https://www.silhouette.rocks/). Please check the [documentation](https://www.silhouette.rocks/docs) first.

The main ideas you have to know to understand the code are:

* Every controller extends `AuthController` that implements some useful utilities, such as the ability to use directly `SecuredAction`, `UnsecuredAction` and `UserAwareAction`
* The `Auth` controller contains every action related with authentication or authorization.
* I have used some implicit functions to use `LoginInfo` and `PasswordInfo` objects as simple `Strings` and vice versa. It makes clearer the code, but you have to remember that. You can check them at `app/utils/silhouette/Implicits.scala`.

Let's see some interesting files:

* `app/models/User.scala`: the user class (with its login info: email and encrypted password). For this example, all the users are stored dynamically in a HashMap.
* `app/models/MailTokenUser.scala`: implements a token for the web page in case to reset a password or confirm a user's email during a sign up. For this example, all the tokens are stored dynamically in a HashMap.
* `app/utils/silhouette/Module.scala`: module that provides all the required classes for the Dependency Injection.
* `app/utils/silhouette/AuthController.scala`: declares the Controller will extend all our controllers.
* `app/utils/silhouette/UserService.scala`: simply retrieves a user from its corresponding LoginInfo.
* `app/utils/silhouette/PasswordInfoDAO.scala`: simply retrieves and saves a user's PasswordInfo from its corresponding LoginInfo.
* `app/utils/silhouette/MailTokenUserService.scala`: implements the corresponding MailTokenService[MailToken].
* `app/utils/silhouette/Authorization.scala`: provides the corresponding `Authorization` classes.
* `app/utils/ErrorHandler.scala`: with SecuredErrorHandler.

### Authentication

Please, check the Auth controller ( `app/controllers/Auth.scala`) to know how to:

* Sign up (with email confirmation)
* Sign in (with remember me)
* Sign out
* Change password
* Reset password (via email)

### Authorization

Each user has one or more services that indicate a specific area or hierarchical level. You can restrict sections to those users who match with a set of services (using logic `OR` or `AND`, you can choose). The master role has always full access to everywhere. For example:

* `serviceA`: the user has access to the 'service A' area.
* `serviceA` and `serviceB`: the user has access to 'service A' and 'service B' areas.
* `master`: full access to every point of the webpage.

The Authorization objects are implemented in `app/utils/silhouette/Authorization.scala`.

* `WithService(anyOf: String*)`: you can specifiy a list of services using logic `OR`. So only those users with __any__ of the specified services will be allowed to access.
* `WithServices(allOf: String*)`: you can specifiy a list of services using logic `AND`. So only those users with __all__ of the specified services will be allowed to access.

You also have some tags to customise your UI according to the services for the logged user. They are within the folder `app/views/admin/tags/auth`.

* `withService(anyOf: String*) { … }`
* `withServiceOrElse(anyOf: String*) { … } { … }`
* `withServices(anyOf: String*) { … }`
* `withServicesOrElse(anyOf: String*) { … } { … }`

You will see a bit more information when you sign in and you will be able to try the authorization functionality by yourself.

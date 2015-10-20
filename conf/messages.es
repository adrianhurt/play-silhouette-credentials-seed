
################################################################################################
# COMMON

field.firstname=Nombre
field.lastname=Apellidos
field.nick=Nick
field.email=Email
field.password=Contraseña
field.password.repeat=Repite la contraseña
field.services=Servicios

submit=Enviar
reset=Restablecer
back=Atrás
go.index=Ir al índice

################################################################################################
# TOPBAR

topbar.index=Índice
topbar.myaccount=Mi cuenta
topbar.hello=¡Hola {0}!<br>Tus servicios son: {1}

################################################################################################
# INDEX

index.title=Ejemplo de Autorización
index.intro.logged=Estás registrado como <span class="text-success">{0}</span>, así que puedes ir a la sección \
<a href="{1}">Mi cuenta</a> para ver tu información de contacto.<br>\
Por supuesto puedes <a href="{2}">salir</a>.
index.intro.notlogged=Ahora, no has iniciado ninguna sesión, así que puedes intentar <a href="{0}">entrar</a> or <a href="{1}">registrarte</a> y crear una nueva cuenta.<br>\
Si no recuerdas tu contraseña, puedes también <a href="{2}">restrablecerla</a> con el tradicional mecanismo de confirmación de email.
index.explanation=Cada usuario tiene uno o más servicios, y cada uno indica un área específica o nivel jerárquico.<br>\
Puedes restringir secciones para aquellos usuarios que tengan unos servicios determinados (usando lógica OR o AND, tú dedices).<br>\
El rol <span class="text-warning">master</span> tiene siempre acceso total.
index.example=Por ejemplo:
index.example.serviceA=el usuario tiene acceso al área del ''serviceA''.
index.example.serviceA_serviceB=el usuario tiene acceso a las áreas de ''service A'' and ''service B''.
index.example.master=acceso total a cualquier punto de la página web
index.auth.status=En este caso, estás registrado como {0} y tus servicios son: {1}
index.table.section=Sección
index.table.authobject=Objeto Authorization
index.table.services=Servicios requeridos
index.table.allowed=¿Estás autorizado?
index.table.go=Ve y compruébalo por tí mismo

################################################################################################
# MY ACCOUNT

myaccount.title=Mi cuenta

################################################################################################
# AUTH

signup=Registro
signup.title=Regístrate para tener tu cuenta
signup.signin.question=¿Ya eres miembro?
signup.signin=Entra ahora
signup.thanks=¡Gracias {0} por registrate!
signup.sent=Acabamos de enviarte un email a {0}. Por favor, sigue sus instrucciones para completar tu nueva cuenta.
signup.ready=Ya tienes tu nueva cuenta disponible

signin=Entrar
signin.title=Introduce tus credenciales
signin.rememberme=Recuérdame
signin.signup.question=¿No tienes cuenta?
signin.signup=Regístrate ahora
signin.forgot.question=¿Has olvidado tu contraseña?
signin.forgot=Restablécela ahora

signout=Salir

forgot.title=¿Has olvidado tu contraseña?
forgot.sent=Acabamos de enviarte un email a {0} con las instrucciones para restablecer tu contraseña
forgot.reset.title=Restablece tu contraseña
forgot.reseted=Tu contraseña ha sido restablecida

changepass=Modifica tu contraseña
changepass.title=Modifica tu contraseña
changepass.field.current=Contraseña actual
changepass.field.new=Nueva contraseña
changepass.field.repeat=Repite la contraseña

auth.user.notexists=No hay ningún usuario con este email
auth.user.notunique=No existe otro usuario con este email
auth.credentials.incorrect=Tu email o contraseña son incorrectos
auth.passwords.notequal=Las contraseñas deben ser iguales
auth.password.changed=La contraseña se ha moficicado correctamente
auth.currentpwd.incorrect=La contraseña actual es incorrecta

denied.title=¡Acceso denegado!
denied.text=No tienes autorización para estar aquí.

################################################################################################
# ERRORS

error.unknown.title=Oops, ha ocurrido un error
error.unknown.text=Esta excepción ha sido registrada con el id <strong>{0}</strong>.
error.notfound.title=Dirección no encontrada
error.notfound.text=Para la petición ''{0}''

################################################################################################
# MAILS

mail.welcome.subject=Bienvenido a MyWeb! Por favor, confirma tu cuenta
mail.welcome.hello=¡Bienvenido {0}!
mail.welcome.prelink=¡Gracias por registrate en esta magnífica página web! Por favor, verifica tu dirección de correo pinchando en el siguiente link.
mail.welcome.postlink=Este link expirará en 24 horas si no es activado.

mail.forgotpwd.subject=Restablece tu contraseña para MyWeb
mail.forgotpwd.prelink=Alguien (esperemos que tú) ha solicitado restablecer la contraseña de tu cuenta en MyWeb. Pincha en el siguiente link para restablecer tu contraseña:
mail.forgotpwd.postlink=Este link expirará en 24 horas. Si no deseas modificar tu contraseña, ignora este email y no se realizará ninguna acción.

mail.sign=Equipo MyWeb

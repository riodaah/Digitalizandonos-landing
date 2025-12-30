# 🚀 Guía de Migración a Firebase Hosting

## ✅ Configuración Completada

Se han creado todos los archivos necesarios para Firebase Hosting:

- ✅ `firebase.json` - Configuración de hosting
- ✅ `.firebaserc` - ID del proyecto Firebase
- ✅ `.github/workflows/firebase-hosting-merge.yml` - Deploy automático
- ✅ `.github/workflows/firebase-hosting-pull-request.yml` - Preview en PRs
- ✅ `.gitignore` - Actualizado con archivos de Firebase

## 📝 Pasos para Completar el Deploy

### 1. Configurar el Secret en GitHub

Para que GitHub Actions pueda hacer deploy automáticamente, necesitas agregar el service account a los secrets de GitHub:

1. Ve a tu repositorio en GitHub: `https://github.com/riodaah/Digitalizandonos-landing`
2. Ve a **Settings** → **Secrets and variables** → **Actions**
3. Haz clic en **New repository secret**
4. Nombre: `FIREBASE_SERVICE_ACCOUNT_DIGITALIZANDONOS_BBCE9`
5. Valor: Copia TODO el contenido del archivo `digitalizandonos-bbce9-firebase-adminsdk-fbsvc-de333258df.json`

```json
{
  "type": "service_account",
  "project_id": "digitalizandonos-bbce9",
  ... (todo el contenido del archivo)
}
```

### 2. Hacer Push al Repositorio

Una vez configurado el secret, haz push de los cambios:

```bash
git push origin main
```

### 3. Deploy Manual (Opcional)

Si quieres hacer un deploy manual desde tu computadora:

```bash
# Opción A: Login interactivo (abre el navegador)
firebase login

# Una vez autenticado
firebase deploy

# Opción B: Usando el service account directamente
set GOOGLE_APPLICATION_CREDENTIALS=digitalizandonos-bbce9-firebase-adminsdk-fbsvc-de333258df.json
firebase deploy
```

### 4. Verificar el Deploy Automático

Después del push, GitHub Actions se ejecutará automáticamente:

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to Firebase Hosting on merge" ejecutándose
3. Una vez completado, tu sitio estará disponible en:
   - URL principal: `https://digitalizandonos-bbce9.web.app/`
   - URL alternativa: `https://digitalizandonos-bbce9.firebaseapp.com/`

## 🔧 Configurar Dominio Personalizado (digitalizandonos.cl)

### En Firebase Console:

1. Ve a https://console.firebase.google.com/
2. Selecciona el proyecto `digitalizandonos-bbce9`
3. Ve a **Hosting** en el menú lateral
4. Haz clic en **Add custom domain**
5. Ingresa: `digitalizandonos.cl`
6. Firebase te dará registros DNS para configurar

### En tu Proveedor de DNS:

Agrega los siguientes registros (Firebase te dará los valores exactos):

```
Tipo A:
digitalizandonos.cl → IP de Firebase

Tipo TXT (para verificación):
digitalizandonos.cl → firebase-verification-code

Tipo A para www:
www.digitalizandonos.cl → IP de Firebase
```

**Nota**: La propagación DNS puede tomar hasta 24-48 horas.

## 🎯 Ventajas de Firebase Hosting

- ✅ **Gratis** para sitios pequeños (10 GB/mes)
- ✅ **CDN global** automático
- ✅ **SSL/HTTPS** gratis y automático
- ✅ **Deploy automático** con GitHub Actions
- ✅ **Rollback** fácil a versiones anteriores
- ✅ **Preview URLs** en pull requests

## 📊 Monitoreo

Puedes ver estadísticas de uso en:
https://console.firebase.google.com/project/digitalizandonos-bbce9/hosting

## 🆘 Solución de Problemas

### Error: "Unauthorized"
- Verifica que el secret `FIREBASE_SERVICE_ACCOUNT_DIGITALIZANDONOS_BBCE9` esté correctamente configurado en GitHub

### Error: "Project not found"
- Verifica que el proyecto existe en Firebase Console
- Verifica que el project_id en `.firebaserc` sea correcto: `digitalizandonos-bbce9`

### El sitio no carga correctamente
- Verifica que el build se completó exitosamente
- Revisa que la carpeta `dist` tenga el contenido correcto
- Verifica los logs en GitHub Actions

## 📚 Recursos

- [Documentación Firebase Hosting](https://firebase.google.com/docs/hosting)
- [GitHub Actions para Firebase](https://github.com/marketplace/actions/deploy-to-firebase-hosting)
- [Configurar dominio personalizado](https://firebase.google.com/docs/hosting/custom-domain)

---

¿Necesitas ayuda? Revisa los logs de GitHub Actions o la consola de Firebase para más detalles.


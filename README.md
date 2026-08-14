# Mariam Lifestyle — Expo / EAS

هذا هو إصدار Expo/React Native من التطبيق، مخصص لبناء APK عبر Expo EAS Cloud Build بدون Android Studio.

## البناء السحابي
1. ثبتي Node.js.
2. من Terminal داخل المشروع:
   npm install
   npm install -g eas-cli
   eas login
   eas build:configure
   eas build -p android --profile preview

ملف `eas.json` مضبوط ليخرج APK (`android.buildType: apk`).

بعد انتهاء البناء، EAS يعطيك رابط/صفحة تحميل للـAPK، ويمكن فتح الرابط من الموبايل وتثبيته.

ملاحظة: التطبيق يستخدم expo-notifications للإشعارات المحلية. توقيت الإشعارات الحالي محفوظ في الكود ويمكن تغييره لاحقًا من داخل شاشة إعدادات.

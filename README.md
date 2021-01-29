# TodoNx

## ติดตั้ง และใช้งาน external npm packages

การติดตั้ง external npm packages เข้ามาใน Nx Workspace ใช้วิธีการติดตั้งแบบปกติผ่าน `npm install [pakagename]` ซึ่งทุก packages จะถูกติดตั้งรวมกัน และมี package.json แค่ไฟล์เดียว

## ใช้งาน Antd

- ติดตั้ง `npm i antd`

- ให้ import style ที่ไฟล์ `apps/web/pages/\_app.tsx`

```diff
import React from 'react';
import { AppProps } from 'next/app';

+import 'antd/dist/antd.css';

function CustomApp({ Component, pageProps }: AppProps) {
+  return <Component {...pageProps} />;
}

export default CustomApp;
```

- ทดลองเรียกใช้งาน Antd Component โดยให้แก้ไขที่ไฟล์ `apps/web/pages/index.tsx`

```diff
import React from 'react';
+import { Button, DatePicker } from 'antd';

export function Index() {

  return (
    <>
+      <Button type="primary">PRESS ME</Button>
+      <DatePicker placeholder="select date" />
    </>
  );
}

export default Index;
```

- ทดลองรัน `nx run web:serve`

> ลบไฟล์
>
> - apps/web/pages/index.module.css
> - apps/web/pages/styles.css
> - apps/web/public/\*.svg

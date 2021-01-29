# TodoNx

## สร้าง React App

เริ่มต้นใช้ `nx list` เพื่อแสดง plugins ทั้งหมด

```bash
npx nx list

>  NX  Installed plugins:

  @nrwl/jest (builders,generators)
  @nrwl/linter (builders)
  @nrwl/workspace (builders,generators)


>  NX  Also available:

  @nrwl/angular (generators)
  @nrwl/cypress (executors,generators)
  @nrwl/express (executors,generators)
  @nrwl/nest (executors,generators)
  @nrwl/next (executors,generators)
  @nrwl/node (executors,generators)
  @nrwl/nx-plugin (executors,generators)
  @nrwl/react (executors,generators)
  @nrwl/storybook (executors,generators)
  @nrwl/web (executors,generators)
```

ซึ่งถ้าต้องการรันคำสั่ง `nx` จากในเครื่องตัวเองต้องติดตั้งก่อน `npm install -g nx`

โดยเราจะสร้างโปรเจคใหม่โดยใช้ [Next.js](https://nextjs.org/) ดังนั้นจะต้องติดตั้ง plugin ที่จะใช้งานก่อน

```bash
npm i -D @nrwl/next
```

เมื่อติดตั้ง plugin เสร็จแล้วก็จะสามารถสร้าง app ใหม่โดยให้คำสั่ง

```bash
nx g @nrwl/next:app web
```

## การรันโปรเจค

สามารถรันได้จากคำสั่ง `nx run project:target`

ซึ่งถ้าเปิดดูที่ไฟล์ workspace.json จะพบว่ามี projects และในแต่ละ project จะมี targets อยู่

```json
{
  "version": 2,
  "projects": {
    "web": {
      "root": "apps/web",
      "sourceRoot": "apps/web",
      "projectType": "application",
      "targets": {
        "build": {},
        "serve": {
          "executor": "@nrwl/next:server",
          "options": {
            "buildTarget": "web:build",
            "dev": true
          },
          "configurations": {
            "production": {
              "buildTarget": "web:build:production",
              "dev": false
            }
          }
        },
        "export": {},
        "lint": {},
        "test": {}
      }
    },
    "web-e2e": {}
  },
  "cli": {},
  "generators": {},
  "defaultProject": "web"
}
```

ดังนั้นต้องรันโดยให้คำสั่งว่า `nx run web:serve`

```bash
nx run web:serve

> nx run web:serve
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db
info  - automatically enabled Fast Refresh for 1 custom loader
info  - Using external babel configuration from D:\workspaces\github\todo-nx\todo-nx\apps\web\.babelrc
event - compiled successfully
[ ready ] on http://localhost:4200
```

> หรือในกรณีที่ต้องการรัน default project (ระบุไว้ที่ไว้ workspace.json `"defaultProject": "web"`) ก็สามารถรันได้จากคำสั่ง `nx serve` หรือ `npm start`

หากต้องการเปลี่ยน port จาก 4200 เป็น 8080 ก็สามารถทำได้โดยการใส่ options ของแต่ละ targets ได้ เช่น

```diff
{
  "version": 2,
  "projects": {
    "web": {
      "root": "apps/web",
      "sourceRoot": "apps/web",
      "projectType": "application",
      "targets": {
        "build": {},
        "serve": {
          "executor": "@nrwl/next:server",
          "options": {
            "buildTarget": "web:build",
            "dev": true,
+            "port": 8080
          },
          "configurations": {
            "production": {
              "buildTarget": "web:build:production",
              "dev": false
            }
          }
        },
        "export": {},
        "lint": {},
        "test": {}
      }
    },
    "web-e2e": {}
  },
  "cli": {},
  "generators": {},
  "defaultProject": "web"
}
```

หรือจะระบุ option ไปตอนสั่งรันเลยก็ได้

```bash
nx serve --port=8080

> nx run web:serve --port=8080
> Browserslist: caniuse-lite is outdated. Please run:
> npx browserslist@latest --update-db
> info - automatically enabled Fast Refresh for 1 custom loader
> info - Using external babel configuration from D:\workspaces\github\todo-nx\todo-nx\apps\web\.babelrc
> event - compiled successfully
> [ ready ] on http://localhost:8080

```

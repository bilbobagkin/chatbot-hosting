import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReplyFallbackComponent } from './reply-fallback/reply-fallback.component'; 
import { ReplyFallbackMsgComponent } from './reply-fallback-msg/reply-fallback-msg.component'; 

const appRoutes: Routes = [
  // เราจะนิยาม Route หรือเส้นทางของเราในนี้
  // เช่น
  // { path: 'pages', component: PageListComponent },
  // เพื่อบอกว่าเมื่อไหร่ที่เข้ามาจาก /pages ให้วิ่งไปใช้บริการคอมโพแนนท์ชื่อ PageListComponent
  { path: '', component: AppComponent },
  // เมื่อเข้าถึง /replyfallback
  // ให้นำ ReplyFallbackComponent ไปแสดงผลใน RouterOutlet ของ AppComponent
  { path: 'replyfallback', component: ReplyFallbackComponent },
  { path: 'replyfallbackmsg', component: ReplyFallbackMsgComponent }
];

// เรา export ตัวแปรประเภทค่าคงที่ (const) ชื่อ routing ออกไป
// routing นี้เป็นผลลัพธ์จากการเรียก RouterModule.forRoot(appRoutes)
// โดย routing ของเราเป็น ModuleWithProviders
// เพื่อนๆคนไหนไม่เข้าใจว่าทำไมเราต้องเขียน routing: ModuleWithProviders
// แนะนำให้อ่าน ชุดบทความสอนใช้งาน TypeScript ที่ https://www.babelcoder.com/blog/series/typescript ครับ
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
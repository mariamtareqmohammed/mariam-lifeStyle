import React,{useEffect,useState} from 'react';
import {ScrollView,View,Text,TextInput,Pressable,StyleSheet,Alert} from 'react-native';
import * as Notifications from 'expo-notifications';

const defaultTasks=['مهمة 1','مهمة 2','مهمة 3','مهمة 4'];
const reminders=[
 ['fajr','04:30','🌅 الفجر + الورد + الأذكار'],
 ['course','10:00','📚 وقت ساعة الكورسات'],
 ['job','12:00','💼 45 دقيقة للبحث عن شغل'],
 ['walk','17:00','🚶🏻‍♀️ ساعة مشي + المحاضرة الدينية'],
 ['review','21:30','🌙 راجعي يومك ومهامك الأربعة'],
 ['sleep','23:00','😴 وقت الاستعداد للنوم']
];

function timeToDate(t){
 const [h,m]=t.split(':').map(Number), d=new Date();
 d.setHours(h,m,0,0); if(d<=new Date()) d.setDate(d.getDate()+1); return d;
}
async function schedule(t,label){
 await Notifications.scheduleNotificationAsync({
   content:{title:'Mariam Lifestyle',body:label},
   trigger:{date:timeToDate(t)}
 });
}

export default function Home(){
 const [tasks,setTasks]=useState(defaultTasks);
 const [saved,setSaved]=useState(false);

 useEffect(()=>{ Notifications.requestPermissionsAsync(); },[]);
 const save=async()=>{
   setSaved(true);
   for(const [id,time,label] of reminders) await schedule(time,label);
   Alert.alert('تم ❤️','اتحفظت مهامك وجدول الإشعارات.');
 };

 return <ScrollView style={s.page} contentContainerStyle={{paddingBottom:50}}>
  <View style={s.hero}><Text style={s.title}>🌱 Mariam Lifestyle</Text><Text style={s.white}>يوم بسيط، ثابت، وقابل للتنفيذ.</Text></View>

  <View style={s.card}><Text style={s.h2}>🎯 مهام اليوم — 4 فقط</Text>
   {tasks.map((t,i)=><TextInput key={i} style={s.input} value={t} onChangeText={v=>{let a=[...tasks];a[i]=v;setTasks(a)}} placeholder={`مهمة ${i+1}`}/>)}
   <Pressable style={s.btn} onPress={save}><Text style={s.btnText}>{saved?'تم الحفظ ✔️':'حفظ اليوم والإشعارات'}</Text></Pressable>
  </View>

  <View style={s.card}><Text style={s.h2}>🌿 الثوابت</Text>
   {['🕌 الصلاة في أوقاتها + الأذكار','🌅 الفجر + الورد','🚶🏻‍♀️ ساعة مشي + محاضرة دينية','📚 ساعة كورسات','💼 45 دقيقة بحث عن شغل','🏠 تغيير/إصلاح حاجة واحدة في البيت','😴 حوالي 7 ساعات نوم'].map(x=><Text style={s.item} key={x}>{x}</Text>)}
  </View>

  <View style={s.card}><Text style={s.h2}>📖 الدورات الدينية</Text>
   <Text style={s.item}>أشهر الكبائر: 6/14</Text><Text style={s.item}>رياض الصالحين: 4/13</Text><Text style={s.item}>أمهات المؤمنين: 4/12</Text>
   <Text style={s.small}>14/39 منجزة — 25 متبقية. المحاضرة اليومية تُسمع أثناء المشي.</Text>
  </View>

  <View style={s.card}><Text style={s.h2}>🎓 خطة الـ90 يوم</Text>
   <Text style={s.item}>1. Google Ads + Measurement</Text><Text style={s.item}>2. SEO Essentials with Semrush</Text>
   <Text style={s.small}>ساعة يوميًا: نتعلم → نطبق → ننتج شيئًا للـPortfolio.</Text>
  </View>

  <View style={s.card}><Text style={s.h2}>🎁 المكافأة</Text><Text style={s.item}>رقص 💃 · رسم 🎨 · كتابة ✍️ · أغاني 🎧 · راحة/نوم 😴</Text></View>
 </ScrollView>
}
const s=StyleSheet.create({
 page:{flex:1,backgroundColor:'#F7F5FF'},hero:{margin:14,padding:24,borderRadius:26,backgroundColor:'#7C5CFF'},title:{fontSize:28,fontWeight:'800',color:'#fff'},white:{color:'#fff',marginTop:5,fontSize:15},
 card:{backgroundColor:'#fff',marginHorizontal:14,marginTop:12,padding:18,borderRadius:20},h2:{fontSize:19,fontWeight:'800',color:'#4F4388',marginBottom:12},input:{borderWidth:1,borderColor:'#E5E1F0',borderRadius:12,padding:11,marginBottom:9},btn:{backgroundColor:'#7C5CFF',padding:13,borderRadius:12,alignItems:'center'},btnText:{color:'#fff',fontWeight:'800'},item:{fontSize:16,paddingVertical:6},small:{fontSize:12,color:'#777',lineHeight:19}
});
import React from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCol, IonCard, IonButtons,
  IonBackButton, IonItem, IonItemDivider, IonProgressBar
} from '@ionic/react';

const TaskDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/response" text="返回" />
          </IonButtons>
          <IonTitle>任务详情</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol
              size-xs="12"
              size-sm="10"
              size-md="8"
              size-lg="6"
              style={{ margin: "0 auto" }}>
              <IonItemDivider>任务标题</IonItemDivider>
              <IonItem lines="none">搜集抖音/微博上的灾情信息</IonItem>
              <IonItemDivider>任务类型</IonItemDivider>
              <IonItem lines="none">I（impact灾害影响）</IonItem>
              <IonItemDivider>截止时间</IonItemDivider>
              <IonItem lines="none">2020年7月9日 下午23:59</IonItem>
              <IonItemDivider>需要人数</IonItemDivider>
              <IonProgressBar value={0.5}></IonProgressBar>
              <IonItem lines="none">2/10</IonItem>
              <IonItemDivider>任务内容</IonItemDivider>
              <IonItem lines="none">搜集抖音/微博上的灾情信息，按照模版发布</IonItem>
              <IonItemDivider>模版</IonItemDivider>
              <IonItem lines="none">
                <IonCard>
                  <IonItem>【信息发布时间】2020-07-26 13:07</IonItem>
                  <IonItem>【信息来源】人民日报</IonItem>
                  <IonItem>【信息内容】7月26日上午，湖北省恩施市建始县因降雨而出现内涝。目前建始县已启动防汛I级应急响应，当地正在紧急转移疏散受灾群众。</IonItem>
                  <IonItem>【信息链接】https://m.weibo.cn/2803301701/4530924505276582</IonItem>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TaskDetail;

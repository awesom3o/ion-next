"use client";

import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, cog } from "ionicons/icons";

import SubPage from "@/app/sub/page";
import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setupIonicReact();

  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    setRender(true);
  }, []);

  return render ? (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route component={() => children} />
            {/* <Route exact path="/sub" component={SubPage} /> */}
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <div className="w-full flex justify-center gap-10">
            <Link href="/">
              <IonButton>
                <IonIcon slot="icon-only" icon={home}></IonIcon>
              </IonButton>
            </Link>
            <Link href="/sub">
              <IonButton>
                <IonIcon slot="icon-only" icon={cog}></IonIcon>
              </IonButton>
            </Link>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  ) : null;
}

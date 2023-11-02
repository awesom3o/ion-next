"use client";

import Link from "next/link";
import {
  IonPage,
  IonButton,
  IonContent,
  useIonRouter,
  IonNav,
} from "@ionic/react";

import SubClient from "./sub/page.client";

export default function Home() {
  // const navigation = useIonRouter();

  // const goToSub = () => {
  //   navigation.push("/sub", "none", "replace");
  // };

  return (
    <IonPage>
      <IonContent>
        <div>Home</div>
        <div className="flex flex-col gap-10 m-10">
          <div className="bg-slate-300">
            <p>This is a regular next Link component </p>
            <Link href="/sub">Go to sub</Link>
          </div>

          <div className="bg-slate-300 my-10">
            <p>Ionic button wrapped with Link/component </p>
            <Link href="/sub">
              <IonButton className="w-full">To Sub </IonButton>
            </Link>
          </div>

          <div className="bg-slate-300 my-10">
            <p>Ion button with href prop </p>
            <p className="text-red-600">
              causes re-renders, and loop when fetching ssr{" "}
            </p>
            <IonButton href="/sub" className="w-full">
              Go to sub via Ionic
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

"use client";
import { IonPage, IonContent } from "@ionic/react";
import React from "react";

type Props = {};

const PageClient = ({ posts }) => {
  return (
    <IonPage>
      <IonContent>
        <div>
          <p>sub page client wrapper</p>
          {posts ? (
            <div className="post-list">
              {posts.map((post) => (
                <div key={post.id} className="post-listing">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p> no posts</p>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PageClient;

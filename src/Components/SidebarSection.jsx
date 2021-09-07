import React from "react";
import ProfileFragment from "./ProfileFragment";
import faker from "faker";

export default function SidebarSection(props) {
  return (
    <div className="p-3 sidebar-section">
      <h6 className="sidebar-section-title">{props.title}</h6>
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
      <ProfileFragment userProfileImage={faker.internet.avatar()} />
    </div>
  );
}

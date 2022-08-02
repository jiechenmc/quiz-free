import type { Component } from "solid-js";
import MenuItems from "./MenuItems";
import ProfilePicture from "./ProfilePicture";
import SettingsButton from "./SettingsButton";
import Logo from "./Logo";
export interface SideBarProps {
  name: string;
  profile: string;
}

const NavBar: Component<SideBarProps> = ({ name, profile }) => {
  return (
    <div class="sticky">
      <div class="bg-accent py-4 px-4 grid grid-cols-10 items-center">
        {/* Logo */}
        <div class="col-span-1">
          <Logo />
        </div>

        {/* Menu */}
        {/* <MenuItems /> */}
        <div class="col-span-7">
          <MenuItems />
        </div>

        {/* Settings */}
        <div class="col-span-1">
          <SettingsButton />
        </div>

        {/* Profile Picture */}
        <div class="col-span-1">
          <ProfilePicture name={name} profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

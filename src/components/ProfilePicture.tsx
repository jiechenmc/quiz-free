import { Component } from "solid-js";
import { SideBarProps } from "./NavBar";

const ProfilePicture: Component<SideBarProps> = ({ profile, name }) => {
  return (
    <div class="avatar online placeholder">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
        <img src={profile} alt={`${name}'s Profile Picture`} />
      </div>
    </div>
  );
};

export default ProfilePicture;

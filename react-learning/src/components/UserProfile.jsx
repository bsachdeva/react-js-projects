import PropTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
  console.log(props);

  props.callMe();

  return (
    <div id="user-profile">
      <UserUsername username="Lisa" trimmedUsername="Li" />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFavoriteFoods />
      {String(props.isLoggedIn)}
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string,
  age: PropTypes.number,
};

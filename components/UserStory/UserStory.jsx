import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';

const PROFILE_IMAGE_DIMENSIONS = horizontalScale(65);

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={PROFILE_IMAGE_DIMENSIONS}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;

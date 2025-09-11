import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';

const PROFILE_IMAGE_DIMENSIONS = horizontalScale(48);

const UserPost = ({
  firstName,
  lastName,
  location,
  image,
  profileImage,
  likes,
  comments,
  bookmarks,
}) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={profileImage}
            imageDimensions={PROFILE_IMAGE_DIMENSIONS}
          />

          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={scaleFontSize(20)}
          color={style.colors.grayishBlue}
        />
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faHeart} color={style.colors.grayishBlue} />
          <Text style={style.userPostStatsText}>{likes}</Text>
        </View>
        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faMessage} color={style.colors.grayishBlue} />
          <Text style={style.userPostStatsText}>{comments}</Text>
        </View>
        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color={style.colors.grayishBlue} />
          <Text style={style.userPostStatsText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;

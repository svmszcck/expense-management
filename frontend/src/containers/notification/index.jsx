import { connect } from "react-redux";
import { clearNotification } from '../../store/global/actions'
import Notification from '../../components/notification';

const mapStateToProps = (state) => ({
  isVisible: !!state.global.notification,
  ...state.global.notification
});

const mapDispatchToProps = {
  clear: clearNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

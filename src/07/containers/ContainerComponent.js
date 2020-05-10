import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

// 컨테이너 컴포넌트에서 필요한 데이터를 스토어에서 추출하여 객체를 반환하는 역할
const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name, // 스토어 user 객체의 name에 접근하여 userName으로 반환
    entity: state.collection.entities[props.id], // 프로퍼티로 전달된 id를 참조하여 데이터 추출
  };
};

export default connect(mapStateToProps)(PresentationComponent);
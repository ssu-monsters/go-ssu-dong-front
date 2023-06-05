import styles from './ProfileModal.style';

const ProfileModal = ({ onLogout }: any) => (
  <>
    <div className="drop-triangle"></div>
    <div className="drop">
      <div className="drop-container">
        <div
          className="text"
          style={{ textAlign: 'center', lineHeight: '28px' }}
        >
          현서님, 좋은 조직 찾으시길 바랄게요 ^^
        </div>
        <div className="control">
          <div style={{ marginBottom: '10px' }}>설정</div>
          <div onClick={onLogout}>로그아웃</div>
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

export default ProfileModal;

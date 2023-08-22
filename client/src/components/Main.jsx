import TextArea from './TextArea';
import HeaderNavbar from './HeaderNavbar';
import Chat from './Chat';
import Sidebar from './Sidebar';

const Main = ({
  users,
  currentUser,
  onLogout,
  handleEditAvatarClick,
  message,
  messagesDB,
  setMessage,
  messageList,
  handleMessage,
}) => {
  return (
    <div className='px-8 pt-2 pb-2 h-screen flex flex-col gap-2 bg-blue-50'>
      <HeaderNavbar
        currentUser={currentUser}
        onLogout={onLogout}
        handleEditAvatarClick={handleEditAvatarClick}
      />
      <div className='flex-auto flex flex-col overflow-hidden'>
        <div className='h-full flex gap-2'>
          <Sidebar
            users={users}
            currentUser={currentUser}
          />
          <div className='w-full flex flex-col gap-2'>
            <Chat
              messageList={messageList}
              messagesDB={messagesDB}
              currentUser={currentUser}
            />
            <TextArea
              setMessage={setMessage}
              handleMessage={handleMessage}
              message={message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

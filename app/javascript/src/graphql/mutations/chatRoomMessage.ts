import gql from 'graphql-tag';

const CREATE_CHAT_ROOM_MESSAGE = gql`
  mutation CreateChatRoomMessage($chatRoomId: ID!, $content: String!) {
    createChatRoomMessage(input: { chatRoomId: $chatRoomId, content: $content }) {
      chatRoomMessage {
        id
        content
        createdAt
      }
      errors {
        key
        message
      }
    }
  }
`;

export {CREATE_CHAT_ROOM_MESSAGE};

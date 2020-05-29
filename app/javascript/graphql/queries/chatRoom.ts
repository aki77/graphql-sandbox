import gql from 'graphql-tag';

const CHAT_ROOM = gql`
  query ChatRoom($id: ID!) {
    chatRoom(id: $id) {
      likeCount
    }
  }
`;

export {CHAT_ROOM};

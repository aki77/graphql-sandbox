/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatRoom
// ====================================================

export interface ChatRoom_chatRoom {
  __typename: "ChatRoom";
  likeCount: number;
}

export interface ChatRoom {
  /**
   * チャットルームを取得します
   */
  chatRoom: ChatRoom_chatRoom;
}

export interface ChatRoomVariables {
  id: string;
}

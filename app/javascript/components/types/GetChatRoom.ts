/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetChatRoom
// ====================================================

export interface GetChatRoom_chatRoom {
  __typename: "ChatRoom";
  likeCount: number;
}

export interface GetChatRoom {
  /**
   * チャットルームを取得します
   */
  chatRoom: GetChatRoom_chatRoom;
}

export interface GetChatRoomVariables {
  id: string;
}

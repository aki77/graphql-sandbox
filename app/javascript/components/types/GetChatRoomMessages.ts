/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetChatRoomMessages
// ====================================================

export interface GetChatRoomMessages_chatRoomMessages {
  __typename: "ChatRoomMessage";
  id: string;
  content: string;
  createdAt: any;
}

export interface GetChatRoomMessages {
  /**
   * メッセージを全て取得します
   */
  chatRoomMessages: GetChatRoomMessages_chatRoomMessages[];
}

export interface GetChatRoomMessagesVariables {
  chatRoomId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatRoomMessages
// ====================================================

export interface ChatRoomMessages_chatRoomMessages {
  __typename: "ChatRoomMessage";
  id: string;
  content: string;
  createdAt: any;
}

export interface ChatRoomMessages {
  /**
   * メッセージを全て取得します
   */
  chatRoomMessages: ChatRoomMessages_chatRoomMessages[];
}

export interface ChatRoomMessagesVariables {
  chatRoomId: string;
}

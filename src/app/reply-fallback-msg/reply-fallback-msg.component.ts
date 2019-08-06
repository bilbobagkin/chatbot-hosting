import { Component, OnInit } from '@angular/core';
import { ReplyFallbackMsg } from '../../models/reply-fallback-msg';

@Component({
  selector: 'app-reply-fallback-msg',
  templateUrl: './reply-fallback-msg.component.html',
  styleUrls: ['./reply-fallback-msg.component.css']
})
export class ReplyFallbackMsgComponent implements OnInit {
  
  _replyFallbackMsgArr : ReplyFallbackMsg[];

  constructor() { }

  ngOnInit() {
    this._replyFallbackMsgArr = [
      {Message:'Message1'},
      {Message:'Message2'},
      {Message:'Message3'}];
  }

}
#!/usr/bin/env node
// Bot holding a single counter, allowing anyone to increment it and see its value.
// Usage: ./counter.js <auth token>

var botgram = require("botgram");
var bot = botgram(process.argv[2]);
var counter = 0;

bot.command("start", "help", function (msg, reply, next) {
  reply.text("Use /up to increment the counter! :point_up:");
});

bot.command("up", function (msg, reply, next) {
  counter++;
  reply.text(counter.toString().split("").map(numberToEmoji).join(""));
});

function numberToEmoji(n) {
  var emojis = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  return ":" + emojis[Number(n)] + ":";
}

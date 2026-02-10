"use client";
import { useState, useRef } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [shakeNo, setShakeNo] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setShowDialog(true);
    setShakeNo(true);

    // Shake animation
    setTimeout(() => setShakeNo(false), 500);

    // Auto-close dialog after 2 seconds
    setTimeout(() => setShowDialog(false), 2000);

    // Make "No" button escape to random position on larger screens
    if (window.innerWidth > 768) {
      moveNoButton();
    }
  };

  const moveNoButton = () => {
    if (!noButtonRef.current) return;

    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    noButtonRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButtonRef.current.style.transition = "all 0.3s ease-in-out";

    setTimeout(() => {
      if (noButtonRef.current) {
        noButtonRef.current.style.transform = "translate(0, 0)";
      }
    }, 300);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getTeasingMessages = () => {
    const messages = [
      { emoji: "😭", text: "So mean!" },
      { emoji: "💔", text: "My heart is broken..." },
      { emoji: "😢", text: "Why you gotta hurt me like this?" },
      { emoji: "🥺", text: "Seriously?? 😤" },
      { emoji: "😩", text: "Okay I'm outta here" },
      { emoji: "👻", text: "I'm a ghost now 👻" },
      { emoji: "💀", text: "RIP to me" },
      { emoji: "🎭", text: "The drama! The betrayal!" },
      { emoji: "😤", text: "You're killing me smalls" },
      { emoji: "🚀", text: "I'm flying away from you" },
      { emoji: "🌪️", text: "The pain is real" },
      { emoji: "⚡", text: "You're broken my heart" },
      { emoji: "🔥", text: "This is INSANE" },
      { emoji: "🎪", text: "What a clown moment" },
      { emoji: "🎸", text: "Playing sad music now" },
      { emoji: "🎬", text: "Director yells CUT!" },
    ];

    return messages[Math.min(noCount, messages.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-pink-50 px-4 sm:px-6">
      {yesPressed ? (
        <>
          <div className="animate-bounce">
            <img
              className="h-48 w-48 drop-shadow-lg sm:h-64 sm:w-64"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="celebrate"
            />
          </div>
          <div className="my-4 animate-pulse text-center text-2xl font-bold text-red-500 sm:text-4xl">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
          <div className="text-xl animate-bounce text-pink-500 sm:text-2xl">✨💕✨</div>
        </>
      ) : (
        <>
          <div className="mb-4 animate-pulse">
            <img
              className="h-40 w-40 drop-shadow-lg sm:h-56 sm:w-56"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="cute bear"
            />
          </div>
          <h1 className="mb-6 text-center text-2xl font-bold text-red-600 sm:text-4xl">
            Will you be my Valentine?
          </h1>

          {/* Teasing Dialog */}
          {showDialog && (
            <div className="mb-6 animate-wiggle rounded-lg bg-yellow-300 px-4 py-3 text-center shadow-lg sm:px-6 sm:py-4">
              <div className="text-4xl sm:text-5xl">
                {getTeasingMessages().emoji}
              </div>
              <div className="mt-2 text-lg font-bold text-gray-800 sm:text-xl">
                {getTeasingMessages().text}
              </div>
            </div>
          )}

          {noCount >= 20 ? (
            <div className="flex flex-col items-center gap-6 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 p-6 shadow-xl sm:p-8">
              <div className="animate-bounce text-4xl sm:text-6xl">🎉</div>
              <div className="text-center text-xl font-bold text-purple-700 sm:text-2xl">
                You have NO OTHER OPTION! 😤
              </div>
              <div className="text-center text-base text-purple-600 sm:text-lg">
                I've deleted the "No" button from existence! <br /> You're legally obligated to say YES now! 📜✨
              </div>
              <button
                className={`rounded-lg bg-gradient-to-r from-green-400 to-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:from-green-500 hover:to-green-600 hover:shadow-xl active:scale-95 animate-pulse sm:px-10 sm:py-5`}
                style={{
                  fontSize: "32px",
                }}
                onClick={() => setYesPressed(true)}
              >
                YES (Your Only Choice!)
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <button
                className={`rounded-lg bg-gradient-to-r from-green-400 to-green-500 px-6 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:from-green-500 hover:to-green-600 hover:shadow-xl active:scale-95 sm:px-8 sm:py-4`}
                style={{
                  fontSize: `${Math.min(yesButtonSize, 48)}px`,
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button
                ref={noButtonRef}
                onClick={handleNoClick}
                className={`rounded-lg bg-gradient-to-r from-red-400 to-red-500 px-4 py-2 font-bold text-white shadow-lg transition-all duration-200 hover:from-red-500 hover:to-red-600 hover:shadow-xl active:scale-95 sm:px-6 sm:py-3 ${
                  shakeNo ? "animate-shake" : ""
                }`}
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          )}

          {/* Click counter for mobile users */}
          {noCount > 0 && noCount < 20 && (
            <div className="mt-6 text-center text-sm text-gray-600 sm:text-base">
              You've clicked "No" {noCount} time{noCount !== 1 ? "s" : ""}! 😄
            </div>
          )}

          {/* Warning when getting close to 20 */}
          {noCount >= 15 && noCount < 20 && (
            <div className="mt-6 animate-pulse rounded-lg bg-red-200 px-4 py-2 text-center font-bold text-red-700 sm:px-6 sm:py-3">
              ⚠️ Only {20 - noCount} more clicks until the "No" button vanishes! ⚠️
            </div>
          )}
        </>
      )}
    </div>
  );
}

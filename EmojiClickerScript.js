const autoReactions = {
  startReacting: function (emoji, delay) {
    const allowedEmoji = ['💖', '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'];
    if (!allowedEmoji.includes(emoji)) {
      throw new Error(
        `Invalid value, please type one of ${allowedEmoji.join(', ')}`
      );
    }

    if (typeof delay !== 'number') {
      throw new Error('Invalid value, please type number in ms');
    }

    const reactionsButton = document.querySelector(
      '[aria-label="Send a reaction"]'
    );
    if (reactionsButton.getAttribute('aria-pressed') === 'false') {
      reactionsButton.click();
    }

    this.timer = setInterval(() => {
      const emojiElement = document.querySelector(
        `[role=button] [aria-label=${emoji}]`
      );

      if (!emojiElement) {
        this.stopReacting();
      }

      emojiElement.click();
    }, delay);
  },
  stopReacting: function () {
    clearInterval(this.timer);
  },
};

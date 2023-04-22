AFRAME.registerComponent("info-panel", {
  init: function () {
    var buttonEls = document.querySelectorAll(".menu-button")
    var fadeBackgroundEl = (this.fadeBackgroundEl =
      document.querySelector("#fadeBackground"))
    this.cardImageEl
    this.infoTitleEl = document.querySelector("#infoTitle")
    this.infoDescriptionEl = document.querySelector("#infoDescription")
    this.cardInfo = {
      climateButton: {
        title: "Sahara Desert Climate",
        description:
          "The Sahara Desert is known for its harsh climate, with temperatures reaching over 120°F (49°C) during the day and dropping to below freezing at night.\n\nThis extreme temperature variation is due to the desert's low humidity and lack of cloud cover, which allows heat to escape rapidly at night.\n\nThe Sahara also experiences strong winds, known as the harmattan, which can cause sandstorms and make it difficult to see or breathe.",
      },
      wildlifeButton: {
        title: "Sahara Desert Wildlife",
        description:
          "Despite its harsh conditions, the Sahara is home to a surprising variety of wildlife. Some of the most iconic animals of the Sahara include the dromedary camel, fennec fox, and addax antelope.\n\nMany of these animals have adapted to survive in the desert by conserving water and seeking shelter during the hottest parts of the day.\n\nThe Sahara is also home to a variety of insects, reptiles, and birds, including the majestic ostrich.",
      },
      peopleButton: {
        title: "Sahara Desert People and Culture",
        description:
          "For thousands of years, the Sahara has been home to a variety of cultures and civilizations. Many indigenous groups, such as the Tuareg and Berber people, have adapted to the harsh conditions of the desert by developing unique lifestyles and traditions.\n\nThese cultures often revolve around nomadic herding or trading, with camels playing a crucial role in transportation and commerce.\n\nThe Sahara has also been an important crossroads for trade and migration, with many historic cities and landmarks still standing today.",
      },
    }
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this)
    this.onBackgroundClick = this.onBackgroundClick.bind(this)
    this.backgroundEl = document.querySelector("#background")
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener("click", this.onMenuButtonClick)
    }
    this.backgroundEl.addEventListener("click", this.onBackgroundClick)
    this.el.object3D.renderOrder = 9999999
    this.el.object3D.depthTest = false
    fadeBackgroundEl.object3D.renderOrder = 9
    fadeBackgroundEl.getObject3D("mesh").material.depthTest = false
  },
  onMenuButtonClick: function (evt) {
    var cardInfo = this.cardInfo[evt.currentTarget.id]
    this.backgroundEl.object3D.scale.set(1, 1, 1)
    this.el.object3D.scale.set(1, 1, 1)
    if (AFRAME.utils.device.isMobile()) {
      this.el.object3D.scale.set(1.4, 1.4, 1.4)
    }
    this.el.object3D.visible = true
    this.fadeBackgroundEl.object3D.visible = true
    this.infoTitleEl.setAttribute("text", "value", cardInfo.title)
    this.infoDescriptionEl.setAttribute("text", "value", cardInfo.description)
  },
  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001)
    this.el.object3D.scale.set(0.001, 0.001, 0.001)
    this.el.object3D.visible = false
    this.fadeBackgroundEl.object3D.visible = false
  },
})

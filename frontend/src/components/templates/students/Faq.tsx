import SupportHeading from 'components/atoms/students/SupportHeading'
import SupportParagraph from 'components/atoms/students/SupportParagraph'
import Header from 'components/organisms/students/header'
import * as React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
      {contents.map(content => (
        <div key={content.heading}>
          <SupportHeading text={content.heading} />
          <SupportParagraph text={content.text} />
        </div>
      ))}
      <Header text="Help Center" hasBackButton={true} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 152px 64px;
  text-align: center;
`

const contents = [
  {
    heading: `Setting`,
    text: `1. Please make sure your video and microphone are turned on.\n2. Please make sure your video, speaker, and microphone work properly.\n3. Please ensure that you have a strong internet connection.`
  },
  {
    heading: `What are the system requirements?`,
    text: `Sail can be used on PC and Android. Please make sure your operating system is up-to-date.\nThe following are recommended for a good user experience:\n･ Internet: UP 15 Mbps / DOWN 15 Mbps or faster\n･ Operating system: Windows 8 / macOS 10 / Android 5.1 or newer\n･ Camera: Resolution of 640x480p or better\n･ Microphone: 100 - 15,000 Hz\n･ Browser: Latest version of Google Chrome`
  },
  {
    heading: `What is required to use Sail ?`,
    text: `Please check the system requirements section (“What are the system requirements?”). Additionally, in order to be able to hear and speak well, we highly recommend using earphones or a headset with a microphone.`
  },
  {
    heading: `Is it possible for multiple people to use the same account?`,
    text: `No, each registrant must have an account of their own, so that we may offer the best lesson for each individual.`
  },
  {
    heading: `Can the same email address be used for more than one account?`,
    text: `No, one email address cannot be used for multiple accounts. Email addresses are unique identifiers for accounts.`
  },
  {
    heading: `I am having trouble registering.`,
    text: `If you’re having trouble registering for Sail, please contact us at support@helte-corp.com`
  },
  {
    heading: `Do I have to use my real name?`,
    text: `To make sure conversation goes as smoothly as possible, we recommend using your real name. However, you can also use a nickname if you feel your real name is too long to use. Our system security protects your personal information, including your real name.`
  },
  {
    heading: `About conversation times`,
    text: `Conversation times depend on what time our Japanese users are available. We will do our best to match your schedule with that of the teachers.`
  },
  {
    heading: `What are JLPT Levels?`,
    text: `We use the definitions provided at https://www.jlpt.jp/e/about/levelsummary.html.\n･ N5: Someone who can read & write in basic expressions\n･ N4: Someone who can read & write on daily topics and listen to slow speakers\n･ N3: Someone who can speak on everyday topics using basic expressions.\n･ N2: Someone who can speak using everyday expressions.\n･ N1: Someone who can speak using business expressions or in-depth on specific topics.`
  },
  {
    heading: `How does our system work?`,
    text: `Here is our ecosystem:\n1. A Japanese person indicates their availability.\n2. You select one of their available times.\n3. The conversation reservation is made.\n4. On the day of the conversation, you and the Japanese person get ready beforehand.\n5. You and the Japanese person start the conversation.\n6. You and the Japanese person evaluate the conversation (this helps us make improvements to our system).\n7. Back to step 1.`
  },
  {
    heading: `When can reservations be made?`,
    text: `Reservations can be made whenever. In other words, if they appear when choosing a time, the reservation can be made. However, we recommend that you make reservations well in advance (so that you and your conversation partner have time to prepare).`
  },
  {
    heading: `In case I cannot attend a scheduled conversation, can I make an alternative reservation?`,
    text: `You can reserve another conversation even after a previous one has been cancelled. However, if you forget to cancel a reservation for a conversation you cannot attend, our system will penalize you.`
  },
  {
    heading: `What if I don’t know how to express something in Japanese? What should I do?`,
    text: `Try using another expression that means the same thing.`
  },
  {
    heading: `Is there a limit to the amount of conversations I can have on this service?`,
    text: `Free trial members have 3 free conversations. Members who are subscribed have no limits on the amount of conversations they can have!`
  },
  {
    heading: `Can I ask my conversation partner to proofread a document?`,
    text: `Yes, you can ask for a document to be proofread, if your conversation partner accepts. However, we do not allow for business-related documents and contracts to be proofread.`
  },
  {
    heading: `How do I cancel a conversation I’ve already booked?`,
    text: `Conversations that are already scheduled can only be cancelled from the main page at least a day in advance. If you cannot attend a conversation, please cancel as soon as possible.`
  },
  {
    heading: `If I do not attend a conversation, is there a penalty?`,
    text: `When you don’t attend a conversation, our system penalizes you (your lateness rate is increased). As a result, you will receive less conversation recommendations.`
  },
  {
    heading: `I would like to inform my conversation partner that I will not attend the conversation because something urgent came up.`,
    text: `Once you cancel a conversation, your conversation partner will see that indicated on their account. Please cancel reservations as soon as possible, but note that same-day cancellations are not possible.`
  },
  {
    heading: `How do I confirm a scheduled conversation ?`,
    text: `Visit the main page to find your reserved conversation. Clicking on the reservation will show detailed information about your conversation partner. Once the time for the conversation has come, the start conversation button will be enabled.`
  },
  {
    heading: `How to start a conversation`,
    text: `Be ready for the lesson 5 minutes before it starts. When it is time, click the start button on the reservation's detail page (there will also be a popup dialogue). The video chat with your conversation partner will last for 25 minutes, and once time is up, the conversation will end automatically. This is all according to the time on your device; please make sure that the time on your device is accurate. Otherwise, the video may start and end at incorrect times.`
  },
  {
    heading: `How can I change my settings ?`,
    text: `Open the human-shape icon at the bottom of the main page, then you will see your current information. Then click the "Edit info" at the bottom to open the edit page.`
  },
  {
    heading: `How can I view my notifications?`,
    text: `Click the bell icon at the bottom of the main page to see your list of notifications. Clicking on one of them will take you to that notification’s detail page.`
  },
  {
    heading: `Can I talk while walking?`,
    text: `We highly recommend sitting while talking. Walking while using Sail is dangerous, as your attention will be diverted from walking.`
  },
  {
    heading: `Can I send a package to my conversation partner?`,
    text: `We cannot help you with any issues that may arise when you personally contact any of your conversation partners. Additionally, due to our security policy, we cannot provide any personal information.`
  },
  {
    heading: `Can I send text messages through this service?`,
    text: `No. Due to our focus on improving language speaking ability, we do not provide text messaging functionality.`
  },
  {
    heading: `I forgot the email address I used for my account.`,
    text: `Try resetting your password on the password reset page, using any email address you can think of. If none of the email addresses you try are valid, please contact us so that we can resolve the problem.`
  },
  {
    heading: `I changed my device and email address.`,
    text: `Login with the email address currently tied to your account. On the settings page, you can change your email address.`
  },
  {
    heading: `My camera doesn’t work.`,
    text: `Check the permissions of your computer / smartphone and browser.
Depending on your device, there are different solutions.
Computer: The first time you use a camera and microphone with Sail on your computer, the browser will ask you (through a popup message)  to grant Sail permission to use these devices. If you missed the message or did not grant permission, a muted camera icon will be visible at the right side of the address bar. The icon will only be visible when Sail is requesting access, so for other cases, please go to your browser settings. There, you can give ‘sail.helte.jp’ the necessary permissions.
Android: On Android, visit the browser settings to give ‘sail.helte.jp’ the necessary permissions.`
  },
  {
    heading: `The wrong camera is being used.`,
    text: `Some browsers provide a settings page to specify which camera should be used. Check the settings again.`
  },
  {
    heading: `Nobody is calling or answering at the scheduled time`,
    text: `If nobody is calling or answering your call, unfortunately, your lesson was most likely cancelled. We are doing our best to prevent such situations by improving our system and services.`
  },
  {
    heading: `I can see only a white blank page.`,
    text: `You may be offline. If using a wired LAN connection, please eject and reinsert the cable. If using WiFi, please try disconnecting and connecting again. Be sure to check that your anti-virus does not block your access to Sail.`
  },
  {
    heading: `The connection is not stable; what can I do for a better experience?`,
    text: `The stability of the connection depends on the condition of your internet connection. Please try the following solutions:\n･  Check that your device is charged.\n･ Check that your device is not overheated.\n･ Update your browser to the latest version\n･ Find another place with better internet connection\n･ Try changing between different connection types (WiFi, mobile phone internet, and wired LAN)\n･ Schedule at a less busy time.\n･ Check that your WiFi chip works properly.`
  },
  {
    heading: `How to solve poor sound quality during video chats.`,
    text: `The quality of the video chat is affected by both your internet connection and device. Please check the question “What are the system requirements?”\nTry restarting your browser before the conversation—this will end unnecessary background processes. Also, close all other windows and tabs. To get the best performance, make sure your browser is updated.`
  },
  {
    heading: `I cannot hear my conversation partner. What should I do?`,
    text: `Verify that your device is not muted, and use earphones or a headset.\nAvoid areas with loud noises so that you may hear your partner clearly.`
  },
  {
    heading: `My conversation partner cannot hear me. What should I do?`,
    text: `Check that the microphone is properly connected to your device, and that it is not muted. If possible, try using another microphone, or another device, if necessary.\nTry rebooting your device to solve any technical problems caused by the browser.`
  },
  {
    heading: `I clicked the start button but nothing is happening.`,
    text: `Try closing all other browsers and tabs, and make sure that only Sail is open. Verify that your internet connection is good, and that your time zone settings are correct.`
  },
  {
    heading: `My device has been stolen / lost.`,
    text: `Please let us know as soon as possible so that we may freeze your account.`
  },
  {
    heading: `My account has been stolen.`,
    text: `Try changing your password through the settings page to prevent anyone else from logging in. If suspicious activity continues, contact us so that we may freeze your account.`
  },
  {
    heading: `I keep seeing a 404 error message.`,
    text: `Close your browser and revisit https://sail.helte.jp/.`
  },
  {
    heading: `I found someone who violates the service policy`,
    text: `Please contact us. We will investigate and act accordingly.`
  },
  {
    heading: `I found someone who is using my information (someone who is pretending to be me).`,
    text: `Please contact us. We will investigate and act accordingly.`
  },
  {
    heading: `I received an unsafe connection warning.`,
    text: `Do not open the page. Restart your device. Verify that your internet connection is secure—you may have been connected to a different router that could be hacked. After confirming that there are no problems, please revisit https://sail.helte.jp/.`
  }
]

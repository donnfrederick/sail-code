import Button from 'components/atoms/teachers/Button'
import SupportHeading from 'components/atoms/teachers/SupportHeading'
import SupportParagraph from 'components/atoms/teachers/SupportParagraph'
import Header from 'components/molecules/teachers/Header'
import { history } from 'components/organisms/Router'
import * as React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
      {contents.map(content => (
        <div key={content.text}>
          <SupportHeading text={content.heading} />
          <SupportParagraph text={content.text} />
        </div>
      ))}
      <Button
        type="white"
        text="戻る"
        width={344}
        height={112}
        onClick={() => history.goBack()}
      />
      <Header text="よくあるご質問" backToHome={true} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 184px 80px;
  text-align: center;
`

const contents = [
  {
    heading: 'ご利用環境の確認',
    text:
      'カメラとマイクが使用可能であることを確認してください。またカメラ、マイク、イヤホン(またはスピーカー)が正常に動作することを確認してください。さらに、インターネットが正常に接続されていることを確認してください。'
  },
  {
    heading: 'システムの推奨動作環境について',
    text:
      'Sailはパソコン、Androidタブレット・スマートフォン上で動作します。お使いのオペレーションシステムが最新に更新されていることをご確認ください。\n下記は弊社にて推奨しているシステム動作環境です。\n・インターネット: 上り 15 Mbps / 下り 15 Mbps以上\n・オペレーションシステム: Windows 8 / Macintosh macOS 10 / Android 5.1またはそれ以降\n・カメラ: 640x480以上の解像度\n・マイクロフォン: 100 - 15,000 Hz\n・ブラウザ: 最新のGoogle Chrome'
  },
  {
    heading: 'Sailに必要なものは何ですか？',
    text:
      '「システムの推奨動作環境について」を参照してください。また、お話いただく際にはイヤホンマイクまたはヘッドセットの着用を強くおすすめ致します。'
  },
  {
    heading: 'ひとつのアカウントを複数の人が使うことはできますか？',
    text:
      'いいえ、できません。お一人ずつご登録いただく必要がございます。ご利用者様に合った会話を提供させていただくためには、アカウントに紐付けられた情報が正しい必要があります。'
  },
  {
    heading: '同じメールアドレスで他のアカウントを登録することはできますか？',
    text:
      'いいえ、できません。ひとつのメールアドレスからはひとつのアカウントのみ登録可能です。メールアドレスはアカウントを特定するために使用されます。'
  },
  {
    heading: '正しく登録することができません。',
    text:
      '正しく登録ができない場合は弊社問い合わせ窓口までご連絡をお願い致します。'
  },
  {
    heading: 'Sailではどんな名前が認められますか？',
    text:
      '分かりやすいようにできるだけ本名を書いてください。ただし漢字よりもひらがなのほうが良いかもしれません。お名前の漢字のみで個人が特定されてしまうような方は、個人情報の観点から、ひらがなが推奨されます。また漢字に詳しくない世界の人も多いでしょうから、ひらがなのほうが親切かもしれません。'
  },
  {
    heading: '会話ができる時間について教えて下さい',
    text:
      '会話は、会話可能な時間を設定していただくことで、その時間に会話のできる世界の人が予約を入れて、予定が成立します。まずは会話のできる日時を決めてその時間を設定することからはじめてください。マッチしない場合は時間を変えてみてください。弊社ではできるだけマッチングするように、鋭意サービス改善を行ってまいります。'
  },
  {
    heading: 'みんなどのくらいの日本語が話せますか？',
    text:
      '世界の人は自分の話せる日本語レベルを申告して、システム上で管理されています。日本語がある程度は話せる方とのみの会話を希望される場合は、設定画面からご変更ください。設定は次の会話マッチングから適用されます。'
  },
  {
    heading: 'このシステムはどのように動いていますか？',
    text:
      '下記の順番でサービスは稼働しています。\n1. 日本の人が会話可能な時間を設定する\n2. 世界の人が可能な日時の中から選択して予約する\n3. 予約が決まると、その日時に会話が予定される\n4. 両者ともその会話の予定時間の少し前には準備をする\n5. 時間になったらスタートボタンを押して会話を始める\n6. 会話が終わったらその会話の評価をする\n7. 1に戻る'
  },
  {
    heading: 'いつまでに時間を設定すればいいですか？',
    text:
      '会話が可能だと分かったらすぐに設定すると、よりマッチングの可能性が高まります。1日以上前には設定してください。あまり急な時間ですと、マッチングしない可能性があります。'
  },
  {
    heading:
      '予定していた時間は都合が悪くキャンセルしました。代替の時間をくれますか？',
    text:
      '会話をしていただくには、会話可能な時間を設定していただく必要があります。弊社にて代替日時を個別に提供することはございませんので、ご容赦ください。しかし、参加されずに会話時間がすぎますとその後のマッチングに影響が出てまいりますので、ご都合が悪くなった場合は予定ページからキャンセルをお願い致します。'
  },
  {
    heading: '相手がうまく日本語を話せずにいます',
    text:
      '世界の人が上手に日本語が出ずに困っているときは、ヒントをあげましょう。'
  },
  {
    heading: '継続して会話をすることはできますか？',
    text:
      'はい、できます。会話が終わったら、次に会話の可能な時間をすぐにでも設定しましょう。'
  },
  {
    heading: '世界の人に仕事を頼むことはできますか？',
    text:
      'いいえ、本サービスは世界の人の日本語会話能力の向上のために提供されています。仕事の依頼は固く禁じます。'
  },
  {
    heading: '予定をキャンセルすることはできますか？',
    text:
      'すでにマッチしている予定については、1日以上前のみキャンセル可能です。ご都合が悪くなった場合はできるだけ早くキャンセルを行うことを強くお勧め致します。'
  },
  {
    heading: '予定していた時間に参加できませんでした。ペナルティはありますか？',
    text:
      '画面上には表示されませんが、今後のマッチングに影響する可能性があります。参加ができないことがわかった場合はできるだけキャンセルをするようにお願い致します。また予定が決まった場合には、責任を持ってご参加いただくようお願い致します。'
  },
  {
    heading:
      '急用でどうしてもキャンセルしなければいけなくなりました。相手の方にお知らせするにはどうすればいいですか？',
    text:
      'キャンセルされますと、すぐにシステムに適用され、相手の方も確認ができます。しかしご都合が悪くなった場合はできるだけ早くキャンセルを行うことを強くお勧め致します。予定されている会話は1日以上前のみキャンセル可能です。'
  },
  {
    heading: '予定がマッチしていることはどうやって確認できますか？',
    text:
      'トップページにて、設定いただいた時間を見つけ、その時間のカードに世界の人の名前があるかどうかを確認してください。詳細はそのカードを開くことで確認いただけます。時間になると、会話が可能になります。'
  },
  {
    heading: '会話はどうやってスタートできますか？',
    text:
      '遅くとも5分前には準備をしてください。時間になると会話をはじめるボタンが押せるようになります。また、時間になると、画面上にダイアログウィンドウが表示されます。会話は25分です。会話時間がすぎると、自動的に終了します。この動作はお使いのパソコンまたはタブレット・スマートフォンの時間が正しく設定されていないと予期しない問題が発生します。事前にご確認いただきますようお願い致します。'
  },
  {
    heading: '設定はどこで変更できますか？',
    text:
      '画面右下にある「自分の情報」を開き、現在の設定画面の右下にある「編集する」を開くと編集画面に移ります。編集したい項目を押すと編集することができます。'
  },
  {
    heading: 'お知らせはどこで確認できますか？',
    text:
      '画面右下にある「お知らせ」を開き、確認したいお知らせを見つけて「詳細を見る」を押すと、お知らせの全文が表示されます。'
  },
  {
    heading: 'ログインするためのメールアドレスを忘れました',
    text:
      'パスワードの復旧ページで、お持ちのメールアドレスをいくつか試してください。いずれのメールアドレスにもパスワード再設定の案内が届かない場合は、弊社問い合わせ窓口までご連絡ください。'
  },
  {
    heading:
      'スマートフォンを機種変更したため、メールアドレスが変わってしまいました',
    text:
      'ご登録いただいたメールアドレスでログインをしたあと、設定画面から新しいメールアドレスにご変更ください。'
  },
  {
    heading: 'カメラが正しく動きません',
    text:
      'お使いのパソコンまたはタブレット・スマートフォンの、カメラへのアクセス権限設定をご確認ください。また、ブラウザの設定にあるカメラへのアクセス設定も併せてご確認ください。\nお使いのデバイスによって異なります。\nパソコンをお使いのお客様 パソコン版Google Chromeをお使いの場合は、はじめてのご利用の場合にはカメラ・マイクへのアクセスの許可を促すポップアップが画面左上に表示されます。見逃してしまった、間違えて拒否してしまった場合は、次から右上のアドレスバーのところにカメラの打ち消しアイコンが表示され、クリックすると設定を変更できます。会話中ではない場合はこれらのアイコンは表示されませんので、ブラウザの設定画面からサイトごとの設定の中にある「sail.helte.jp」を選び、カメラ・マイクの許可を有効にしてください。\nAndroidをお使いのお客様 Android版Google Chromeをお使いの場合は、画面右上に表示されているメニューアイコンから設定を開き、サイトごとの設定の中にある「sail.helte.jp」を選び、カメラ・マイクの許可を有効にしてください。この設定でもカメラが有効にならない場合はAndroidの設定から「アプリ」を選び、Google Chromeの権限変更からカメラ・マイクの許可を有効にしてください。'
  },
  {
    heading: '違うカメラが動いてしまいます',
    text:
      'ブラウザによっては使用するカメラを設定画面から選択することができません。その場合は、ブラウザの設定にあるカメラ設定をご確認ください。'
  },
  {
    heading: '会話の時間になりましたが相手が来ません',
    text:
      '大変申し訳ございません。会話の時間になっても相手と繋がらない場合、相手の方が時間までに準備できていなかったか無断欠席をしてしまっている可能性があります。システムやサービスの課題としてこのようなことが起きにくいように鋭意改善を行ってまいります。'
  },
  {
    heading: '画面が真っ白になってしまいました',
    text:
      'インターネットに接続できていないようです。パソコンの有線LANであればケーブルをいったん挿し直し、スマホやパソコンのWiFiであればWiFi機能を有効にし直してもう一度Sailにアクセスしてみてください。また、ウィルス対策ソフトのフィルタリングに該当していないか、ご自身で設定されたセキュリティ設定でロードできない状態になっていないかをご確認ください。'
  },
  {
    heading: '接続が不安定です。解決する方法はありますか？',
    text:
      'ビデオ会話の接続の安定性はインターネットの回線状況に依存します。下記をお試しください。\nお使いのものがノートパソコンまたはタブレットやスマートフォンである場合は充電が十分にされているかご確認ください\nお使いのパソコンまたはタブレット・スマートフォンが異常に発熱していないかご確認ください\nお使いのブラウザが最新バージョンであるかどうかご確認ください\nインターネットのより安定した場所にてお試しください\nWiFi、モバイル回線、固定回線など、別の種類のインターネットをお試し下さい\nインターネットの混んでいない時間帯に会話を設定してください\nWiFiチップが正常に動作しているかご確認ください'
  },
  {
    heading: '画質や音質をよくする方法はありますか？',
    text:
      'ビデオチャットの品質はネット回線の状況や機器が影響しています。推奨環境は「システムの推奨動作環境について」を参照してください。 会話の前にブラウザの再起動をお試しください。バックグラウンドで動いている不要な処理を取り除くことができます。すべてのタブとブラウザ画面を閉じて、ひとつのダブだけでアプリを開いてみてください。また、ブラウザが最新であることを確認し、よりよい状態を保ちましょう。'
  },
  {
    heading: '相手の声が聞こえません。どうすればいいですか？',
    text:
      'お使いのパソコンまたはタブレット・スマートフォンが消音になっていないかご確認ください。またイヤホンまたはイヤホンマイクをお試しください。\n環境音が大きい場合は、静かなところでご利用ください。'
  },
  {
    heading: '相手の方が私の声が聞こえていないようです。どうすればいいですか？',
    text:
      'マイクまたはイヤホンマイクが正しくパソコンまたはタブレット・スマートフォンに接続されているかどうかをご確認ください。または消音になっていないかご確認ください。または、他のマイクまたはイヤホンマイクをお試しください。さらには、他のパソコンまたはタブレット・スマートフォンをお試しください。\nブラウザの処理異常を解決するために、ブラウザまたはオペレーションシステムの再起動をお試しいただくことも有効です。'
  },
  {
    heading: 'スタートボタンを押しましたが何も動きません',
    text:
      'すべてのブラウザとタブを閉じて、Sailのみを起動してください。またお使いのパソコンまたはタブレット・スマートフォンの時刻設定が正しいことをご確認ください。'
  },
  {
    heading: 'パソコン・タブレット・スマートフォンが盗まれました',
    text:
      '即座に弊社にご連絡ください。二次被害を防ぐために、お使いのアカウントを無効化致します。またご自身のセキュリティを再度見直すようお願い致します。'
  },
  {
    heading: '自分のアカウントが盗まれました',
    text:
      '侵入者のログインを防ぐためにパスワードを変更してください。さらに怪しい動きが続く場合は弊社にご連絡ください。被害を防ぐためにアカウントを無効化します。'
  },
  {
    heading: '404ページが表示されます',
    text:
      'ブラウザを閉じて、https://sail.helte.jp/ に直接アクセスしてください。'
  },
  {
    heading: '誰かが規約違反をしているのを見つけました',
    text: '弊社までご連絡ください。調査し、適切な対処を致します。'
  },
  {
    heading: '誰かが私とまったく同じ情報で私であると偽っています',
    text: '弊社までご連絡ください。調査し、適切な対処を致します。'
  },
  {
    heading: '安全な接続ではありませんというエラーが表示されます',
    text:
      'それ以上そのままページを開かず、パソコンまたはタブレット・スマートフォンを再起動してください。またインターネット接続が正しいルーターや経路で行われているかどうかをご確認ください。不正なルーターまたは経路に接続してしまっておりハッキングされている可能性があります。安全であることをご確認後、 https://sail.helte.jp/ に直接アクセスしてください。'
  }
]

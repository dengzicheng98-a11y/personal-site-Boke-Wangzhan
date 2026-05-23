export type PhotoEssay = {
  slug: 'dream' | 'sea' | 'oldcanton'
  title: string
  subtitle: string
  intro: string
  photoCount: number
  coverIndex: number
}

export const photoEssays: PhotoEssay[] = [
  {
    slug: 'dream',
    title: '梦',
    subtitle: 'Dream',
    intro: '有一阵子我痴迷于拍那些像梦境一样的画面。\n\n现在回想，是当时对生活生出了一种逃避——我会突然冒出一个念头：「要是这一切都是梦就好了。」\n\n抱着这种想法，我拍了这些。它们不是梦本身，是我希望真实能被替换掉的那些瞬间。',
    photoCount: 17,
    coverIndex: 1,
  },
  {
    slug: 'sea',
    title: '喜海',
    subtitle: 'On the Sea',
    intro: '我不喜欢陆地。我喜欢海。\n\n去年去海边拍了很多。\n\n海有一种奇怪的吸引力——你离它远的时候它在召唤你,真走到面前又让你不安。大海会像拍玩具车一样把你的船翻过去。\n\n但我还是很喜欢海。',
    photoCount: 22,
    coverIndex: 1,
  },
  {
    slug: 'oldcanton',
    title: '老广',
    subtitle: 'Old Canton',
    intro: '我在闲时总是在广州走。广州很包容，这是我对它最大的看法，广州的地铁上常常能看到黑人、国际交换生和信仰穆斯林教的外国人，在一些高端写字楼里也能看见一些白人。这些人和我们站在一起通常显得格外突出，很想知道他们怎么想的。而且在东湖附近的数码街能见到很多来华购买而二手数码商品回国的进口商。治安也不差，反正很享受这种环境。',
    photoCount: 26,
    coverIndex: 1,
  },
]

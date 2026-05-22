export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="bg-grid bg-grid-hero" aria-hidden="true">
        <div className="bg-fill bg-red" />
        <div className="bg-fill bg-yellow" />
        <div className="bg-fill bg-blue" />
        <div className="bg-line bg-v1" />
        <div className="bg-line bg-v2" />
        <div className="bg-line bg-h1" />
        <div className="bg-line bg-h2" />
        <div className="bg-line bg-vr" />
        <div className="bg-line bg-hr" />
        <div className="bg-line bg-vy" />
        <div className="bg-line bg-vb" />
      </div>
      <p className="caption">Dzs&nbsp;&nbsp;/&nbsp;&nbsp;邓梓晟</p>
      <h1 className="headline">
        Designer turned engineer, building tools where AI fits naturally into work.
      </h1>
      <p className="subtitle">
        Currently exploring interfaces for agents, ambient assistance, and the quieter
        edges of computing. Previously product design at a few places you&rsquo;ve heard of.
      </p>
    </section>
  )
}

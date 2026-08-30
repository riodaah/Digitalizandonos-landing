export const INTRO_STAGES = {
  bar: 0.91,
  cta: 0.93,
  menu: 0.96,
  floating: 0.98,
}

export const INTRO_STAGE_STOPS = [
  INTRO_STAGES.bar,
  INTRO_STAGES.cta,
  INTRO_STAGES.menu,
  INTRO_STAGES.floating,
]

export const introStageOf = (progress) =>
  INTRO_STAGE_STOPS.reduce((count, stop) => (progress >= stop ? count + 1 : count), 0)

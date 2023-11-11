/// <reference types="cypress" />

import {
  starInputRegex,
  starPasteRegex,
} from '@tiptap/extension-bold'

describe('bold regex test', () => {
  it('star input regex matches', () => {
    expect('**Test**').to.match(starInputRegex)
  })

  it('star paste regex matches', () => {
    expect('**Test**').to.match(starPasteRegex)
  })
})

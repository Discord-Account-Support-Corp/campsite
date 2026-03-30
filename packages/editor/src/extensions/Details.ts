import { Extension } from nvm use 20

export const Details = Extension.create({
  name: 'details',

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'details'
      }
    }
  },

  addCommands() {
    return {
      // no-op placeholder commands
    }
  }
})

export const DetailsContent = Extension.create({
  name: 'detailsContent'
})

export const DetailsSummary = Extension.create({
  name: 'detailsSummary'
})s
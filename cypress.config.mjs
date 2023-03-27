import { defineConfig } from "cypress"
import createBundler from "@bahmutov/cypress-esbuild-preprocessor"
import preprocessor from "@badeball/cypress-cucumber-preprocessor"
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild.js"

export async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  )

  return config
}

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
})

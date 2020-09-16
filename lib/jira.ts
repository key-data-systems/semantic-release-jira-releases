import JiraClient from 'jira-connector';

import { PluginConfig, PluginContext } from './types';

export function makeClient(config: PluginConfig, context: PluginContext): JiraClient {
  return new JiraClient({
    host: config.jiraHost,
    basic_auth: {
      email: context.env.JIRA_EMAIL,
      api_token: context.env.JIRA_TOKEN,
    },
  });
}

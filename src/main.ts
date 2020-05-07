import * as installer from './installer';
import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run(): Promise<void> {
  try {
    const version = core.getInput('version') || 'latest';
    const args = core.getInput('args');
    const mage = await installer.getMage(version);

    core.info('🏃 Running Mage...');
    await exec.exec(`${mage} ${args}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

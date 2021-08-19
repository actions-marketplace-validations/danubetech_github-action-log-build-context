let githubEnv = {};
let runnerEnv = {};
let javaEnv = {};
let globalEnv = {};

for (const [key, value] of Object.entries(process.env)) {

    if (key.startsWith('GITHUB_')) {
        githubEnv = {...githubEnv, key: value }
    }

    if (key.startsWith('RUNNER_')) {
        runnerEnv = {...runnerEnv, key: value }
    }

    if (key.startsWith('JAVA_')) {
        javaEnv = {...javaEnv, key: value }
    }

    if (key.startsWith('GLOBAL_')) {
        globalEnv = {...globalEnv, key: value }
    }
}

console.log('### GLOBAL environment variables set in workflow\n')
for (const [key, value] of Object.entries(globalEnv)) {
    console.log(`${key}: ${value}`);
}

console.log('\n\n### GITHUB environment variables set by Github\n')
for (const [key, value] of Object.entries(githubEnv)) {
    console.log(`${key}: ${value}`);
}

console.log('\n\n### RUNNER environment variables set by Github\n')
for (const [key, value] of Object.entries(runnerEnv)) {
    console.log(`${key}: ${value}`);
}

console.log('\n\n### JAVA environment variables set by Github\n')
for (const [key, value] of Object.entries(javaEnv)) {
    console.log(`${key}: ${value}`);
}

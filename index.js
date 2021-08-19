let githubEnv = {};
let runnerEnv = {};
let javaEnv = {};
let globalEnv = {};
let otherEnv = {};

for (const [key, value] of Object.entries(process.env)) {

    if (key.startsWith('GITHUB_')) {
        githubEnv[key] = value
    } else if (key.startsWith('RUNNER_')) {
        runnerEnv[key] = value
    } else if (key.startsWith('JAVA_')) {
        javaEnv[key] = value
    } else if (key.startsWith('GLOBAL_')) {
        globalEnv[key] = value
    } else {
        otherEnv[key] = value
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

console.log('\n\n### Other environment variables set by Github\n')
for (const [key, value] of Object.entries(otherEnv)) {
    console.log(`${key}: ${value}`);
}

for (const [key, value] of Object.entries(process.env).sort()) {
    console.log(`${key}: ${value}`);
}
// TC8: AI commit with NO Prompter field at all
// Tests that renderPrompter() handles null/undefined aiPrompter correctly
// Expected: red "No Data" label for prompter on History tab

function validateNullPrompterDisplay() {
    const commitMeta = {
        interface: 'GitHub Copilot',
        platform: 'GitHub',
        aiTimeMins: 15,
        humanTimeMins: 3,
        // Prompter intentionally omitted
    };
    return commitMeta;
}

module.exports = { validateNullPrompterDisplay };

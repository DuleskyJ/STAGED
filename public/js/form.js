const fillData = async (event) => {

    const eventName = document.querySelector('#event_name').value.trim();
    const artistName = document.querySelector('#artist_name').value.trim();
    const eventTime = document.querySelector('#event_time').value.trim();
    const stageTime = document.querySelector('#stage_time').value.trim();
    const description = document.querySelector('#description').value.trim();

    const response = await fetch('/api/users/logout', {
        method: 'POST',
        body: JSON.stringify({eventName, artistName, eventTime, stageTime, description})
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};
  
document.querySelector('.btn').addEventListener('click', (e) => {
    console.log("calling fill data");
    fillData(e);
});

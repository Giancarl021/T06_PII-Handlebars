async function insert() {
    const [{ value: firstName }, { value: lastName }] = document.querySelectorAll('input');

    let response = {};
    const _response = await fetch('/api/insert', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName }),
        headers: { 'Content-Type': 'application/json' }
    });

    if(_response.status !== 201) {
        response = await _response.json();
    }

    if(response.error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro na requisição',
            text: response.error,
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Pessoa cadastrada',
            text: `${firstName} ${lastName} cadastrado(a) com sucesso`
        });

        document.querySelectorAll('input').forEach(e => e.value = '');
    }
}
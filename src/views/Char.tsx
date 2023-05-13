import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import IChar
// { Equipment }
from "../character/IChar";
import AppContext from '../context';
import { Dropdown, Form, Container, Button } from 'react-bootstrap';
import emptyChar from '../assets/emptyChar';
import translator from '../assets/translator.json';

type Props = {
    mode: 'view' | 'edit';
}

type TInfoKeys = 'name' | 'weight' | 'height' | 'age' | 'image' | 'gender' | 'sexualOrientation';

const Character = (props: Props) => {
    const [char, setChar] = useState<IChar>(emptyChar);

    const { characters } = useContext(AppContext);
    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
            setChar(characters.find(c => c.id === parseInt(id)) as IChar);
        }
    }, []);
    
    const { 
        info: { name, weight, height, age, gender, sexualOrientation },
        status: { health, sanity, lucky, finances, condition, charge, fails, experience: { actual, total }
        },
        attributes: { body, mind, cosmos },
    } = char;

    const changeInfo = (information: TInfoKeys, value: string | number) => {
        setChar({ ...char, info: { ...char.info, [information]: value } } as IChar);
    };

    // const changeEquipment = (equipment: Equipment, action: 'add' | 'remove') => {
    //     if (action === 'add') {
    //         setChar({ ...char, status: { ...char.status, equipment: [...char.status.equipment, equipment] } } as IChar);        
    //     } else {
    //         setChar({ ...char, status: { ...char.status, equipment: char.status.equipment.filter(e => e !== equipment) } } as IChar);
    //     }
    // }
    const changeStatus = (status: 'health' | 'sanity' | 'lucky' | 'finances' | 'condition' | 'charge' | 'fails' | 'actual', value: string | number) => {
        if (status === 'actual') {
            setChar({ ...char, status: { ...char.status, experience: { ...char.status.experience, actual: value } } } as IChar);
        } else {
            setChar({ ...char, status: { ...char.status, [status]: value } } as IChar);
        }
    };

    const changeAttributes = (attribute: 'body' | 'mind' | 'cosmos', value: string | number) => {
        setChar({ ...char, attributes: { ...char.attributes, [attribute]: value } } as IChar);
    };

    const changeAbilities = (ability: 'persuasion' | 'perception' | 'combat' | 'dexterity' | 'stealth' | 'acrobatics', value: string | number) => {
        setChar({ ...char, abilities: { ...char.abilities, [ability]: value } } as IChar);
    };
    
    const changeKnowledge = (knowlege: 'motherLanguage' | 'maths' | 'physics' | 'chemistry' | 'biology' | 'history' | 'geography' | 'electronics' | 'investigation' | 'firstAid' | 'religion' | 'arts' | 'vehicles' | 'survival', value: string | number) => {
        setChar({ ...char, knowledge: { ...char.knowledge, [knowlege]: value } } as IChar);
    }

    const changeUncommonKnowledge = (knowlege: 'anatomy' | 'economy' | 'philosophy' | 'occultism', value: string | number) => {
        setChar({ ...char, knowledge: {...char.knowledge, uncommon: { ...char.knowledge.uncommon, [knowlege]: value } } } as IChar);
    }

    const inputsMode = props.mode === 'view' ? true : false;
    const knowledgeEntries = Object.entries(char.knowledge) as [keyof IChar['knowledge'], number][];
    const uncommonKnowledgeEntries = Object.entries(char.knowledge.uncommon) as [keyof IChar['knowledge']['uncommon'], number][];
    const AbilitiesEntries = Object.entries(char.abilities) as [keyof IChar['abilities'], number][];
    
    return (
        <>
        <section>
            {/* <ImgUploader id={char.id}/> */}
            <Container id="basic-info" className="d-flex justify-content-center">
                <Form.Group controlId="name" className='d-flex justify-content-center'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => {changeInfo('name', e.target.value)}}
                        readOnly={inputsMode}
                    />
                </Form.Group>
                <Form.Group controlId="weight">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control
                        name="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => {changeInfo('weight', e.target.value)}}
                        readOnly={inputsMode}
                        min="15"
                        max="200"
                        step="0.1"
                    />
                </Form.Group>
                <Form.Group controlId="height">
                    <Form.Label>Altura</Form.Label>
                    <Form.Control
                        name="height"
                        type="number"
                        value={height}
                        onChange={(e) => {changeInfo('height', e.target.value)}}
                        readOnly={inputsMode}
                        min="0.4"
                        max="3"
                        step="0.1"
                    />
                </Form.Group>
                <Form.Group controlId="age">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control
                        name="age"
                        type="number"
                        value={age}
                        onChange={(e) => {changeInfo('age', e.target.value)}}
                        readOnly={inputsMode}
                        min="10"
                        max="200"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="gender" className='d-flex justify-content-center'>
                    <Form.Label>Selecione o sexo:</Form.Label>
                    <Dropdown onSelect={(eventKey) => changeInfo('gender', eventKey || 'neuter')}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            {translator.info.gender[gender]}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="male">Masculino</Dropdown.Item>
                            <Dropdown.Item eventKey="female">Feminino</Dropdown.Item>
                            <Dropdown.Item eventKey="neuter">Não-binário</Dropdown.Item>
                            <Dropdown.Item eventKey="male_trans">Homem Trans</Dropdown.Item>
                            <Dropdown.Item eventKey="female_trans">Mulher Trans</Dropdown.Item>
                            <Dropdown.Item eventKey="androgynous">Andrógeno</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Form.Group controlId="sexualOrientation" className='d-flex justify-content-center'>
                    <Form.Label>
                        Orientação Sexual
                    </Form.Label>
                    <Dropdown onSelect={(eventKey) => changeInfo('sexualOrientation', eventKey || 'asexual')}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            {translator.info.sexualOrientation[sexualOrientation]}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="gay">Homossexual</Dropdown.Item>
                            <Dropdown.Item eventKey="straight">Heterosexual</Dropdown.Item>
                            <Dropdown.Item eventKey="asexual">Assexuado</Dropdown.Item>
                            <Dropdown.Item eventKey="bissexual">Bissexual</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            </Container>
            <Container id="attributes" className="d-flex flex-column justify-content-center">
                <Form.Group controlId="body">
                    <Form.Label>Corpo: {body}</Form.Label>
                    <Form.Check
                        inline
                        name="body"
                        type="checkbox"
                        id="body-1"
                        checked={true}
                        disabled={true}
                        readOnly={true}
                    />
                    <Form.Check
                        inline
                        name="body"
                        type="checkbox"
                        id="body-2"
                        checked={body >= 2}
                        disabled={body > 2}
                        onClick={() => {
                            if (body === 1) {
                                changeAttributes('body', 2);
                            }
                            if (body === 2) {
                                changeAttributes('body', 1);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="body"
                        type="checkbox"
                        id="body-3"
                        checked={body === 3}
                        disabled={body === 1}
                        onClick={() => {
                            body === 2
                            ? changeAttributes('body', 3)
                            : changeAttributes('body', 2);
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="mind">
                    <Form.Label>Mente: {mind}</Form.Label>
                    <Form.Check
                        inline
                        name="mind"
                        type="checkbox"
                        id="mind-1"
                        checked={true}
                        disabled={true}
                        readOnly={true}
                    />
                    <Form.Check
                        inline
                        name="mind"
                        type="checkbox"
                        id="mind-2"
                        checked={mind >= 2}
                        disabled={mind > 2}
                        onClick={() => {
                            if (mind === 1) {
                                changeAttributes('mind', 2);
                            }
                            if (mind === 2) {
                                changeAttributes('mind', 1);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="mind"
                        type="checkbox"
                        id="mind-3"
                        checked={mind === 3}
                        disabled={mind === 1}
                        onClick={() => {
                            mind === 2
                            ? changeAttributes('mind', 3)
                            : changeAttributes('mind', 2);
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="cosmos">
                    <Form.Label>Cosmos: {cosmos}</Form.Label>
                    <Form.Check
                        inline
                        name="cosmos"
                        type="checkbox"
                        id="cosmos-1"
                        checked={cosmos >= 1}
                        disabled={cosmos > 1}
                        onClick={() => {
                            if (cosmos === 1) {
                                changeAttributes('cosmos', 0);
                            }
                            if (cosmos === 0) {
                                changeAttributes('cosmos', 1);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="cosmos"
                        type="checkbox"
                        id="cosmos-2"
                        checked={cosmos >= 2}
                        disabled={cosmos > 2 || cosmos < 1}
                        onClick={() => {
                            if (cosmos === 1) {
                                changeAttributes('cosmos', 2);
                            }
                            if (cosmos === 2) {
                                changeAttributes('cosmos', 1);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="cosmos"
                        type="checkbox"
                        id="cosmos-3"
                        checked={cosmos >= 3}
                        disabled={cosmos > 3 || cosmos < 2}
                        onClick={() => {
                            if (cosmos === 2) {
                                changeAttributes('cosmos', 3);
                            }
                            if (cosmos === 3) {
                                changeAttributes('cosmos', 2);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="cosmos"
                        type="checkbox"
                        id="cosmos-4"
                        checked={cosmos >= 4}
                        disabled={cosmos > 4 || cosmos < 3}
                        onClick={() => {
                            if (cosmos === 3) {
                                changeAttributes('cosmos', 4);
                            }
                            if (cosmos === 4) {
                                changeAttributes('cosmos', 3);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="cosmos"
                        type="checkbox"
                        id="cosmos-5"
                        checked={cosmos >= 5}
                        disabled={cosmos > 5 || cosmos < 4}
                        onClick={() => {
                            if (cosmos === 4) {
                                changeAttributes('cosmos', 5);
                            }
                            if (cosmos === 5) {
                                changeAttributes('cosmos', 4);
                            }
                        }}
                    />
                    <Form.Check
                        inline
                        name="cosmos"
                        type="checkbox"
                        id="cosmos-6"
                        checked={cosmos >= 6}
                        disabled={cosmos > 6 || cosmos < 5}
                        onClick={() => {
                            if (cosmos === 5) {
                                changeAttributes('cosmos', 6);
                            }
                            if (cosmos === 6) {
                                changeAttributes('cosmos', 5);
                            }
                        }}
                    />
                </Form.Group>
            </Container>
            <Container id="status" className="d-flex justify-content-center">
                <Form.Group controlId="health">
                    <Form.Label>Vida: {health}</Form.Label>
                    <Form.Control
                        name="health"
                        type="range"
                        value={health}
                        onChange={(e) => {changeStatus('health', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max="6"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="sanity">
                    <Form.Label>Sanidade: {sanity}</Form.Label>
                    <Form.Control
                        name="sanity"
                        type="range"
                        value={sanity}
                        onChange={(e) => {changeStatus('sanity', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max="6"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="lucky">
                    <Form.Label>Sorte: {lucky}</Form.Label>
                    <Form.Control
                        name="lucky"
                        type="range"
                        value={lucky}
                        onChange={(e) => {changeStatus('lucky', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max="3"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="finances">
                    <Form.Label>Finanças: {finances}</Form.Label>
                    <Form.Control
                        name="finances"
                        type="range"
                        value={finances}
                        onChange={(e) => {changeStatus('finances', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max="12"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="charge">
                    <Form.Label>Carga: {charge}</Form.Label>
                    <Form.Control
                        name="charge"
                        type="range"
                        value={charge}
                        onChange={(e) => {changeStatus('charge', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max="3"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="fails">
                    <Form.Label>Falhas: {fails}</Form.Label>
                    <Form.Control
                        name="fails"
                        type="range"
                        value={fails}
                        onChange={(e) => {changeStatus('fails', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max="10"
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="experience">
                    <Form.Label>Experiencia: {actual}</Form.Label>
                    <Form.Control
                        name="experience"
                        type="range"
                        value={actual}
                        onChange={(e) => {changeStatus('actual', e.target.value)}}
                        readOnly={inputsMode}
                        min="0"
                        max={total}
                        step="1"
                    />
                </Form.Group>
                <Form.Group controlId="condition">
                    <Form.Label>Condição: {condition}</Form.Label>
                    <Form.Control
                        name="condition"
                        type="textbox"
                        value={condition}
                        onChange={(e) => {changeStatus('condition', e.target.value)}}
                        readOnly={inputsMode}
                    />
                </Form.Group>
                {/* <Form.Group controlId="equipment">
                    <Form.Label>Equipamentos</Form.Label>
                    <ul>
                        {equipment.map((item, index) => (
                            <li key={index}><Equipment equip={item} /></li>
                        ))}
                    </ul>
                </Form.Group> */}
            </Container>
            <Container id="abilities" className='d-flex justify-content-center'>
                {AbilitiesEntries.map(([item, value]) => (
                    <Form.Group controlId={item} key={`ability-${item}`}>
                        <Form.Label>{translator.abilities[item]}</Form.Label>
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-1`}
                            checked={value >= 1}
                            disabled={value >= 2}
                            onClick={() => {
                                if (value === 1) {
                                    changeAbilities(item, 0);
                                }
                                if (value === 0) {
                                    changeAbilities(item, 1);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-2`}
                            checked={value >= 2}
                            disabled={value >= 1}
                            onClick={() => {
                                if (value === 2) {
                                    changeAbilities(item, 1);
                                }
                                if (value === 1) {
                                    changeAbilities(item, 2);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-3`}
                            checked={value >= 3}
                            disabled={value >= 2}
                            onClick={() => {
                                if (value === 3) {
                                    changeAbilities(item, 2);
                                }
                                if (value === 2) {
                                    changeAbilities(item, 3);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-4`}
                            checked={value >= 4}
                            disabled={value >= 3}
                            onClick={() => {
                                if (value === 4) {
                                    changeAbilities(item, 3);
                                }
                                if (value === 3) {
                                    changeAbilities(item, 4);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-5`}
                            checked={value >= 5}
                            disabled={value >= 4}
                            onClick={() => {
                                if (value === 5) {
                                    changeAbilities(item, 4);
                                }
                                if (value === 4) {
                                    changeAbilities(item, 5);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-6`}
                            checked={value >= 6}
                            disabled={value >= 5}
                            onClick={() => {
                                if (value === 6) {
                                    changeAbilities(item, 5);
                                }
                                if (value === 5) {
                                    changeAbilities(item, 6);
                                }
                            }}
                        />
                    </Form.Group>
                ))}
            </Container>

            <Container id="knowledge">
                {/* <Form.Group controlId="motherLanguage">
                    <Form.Label>Lingua Materna</Form.Label>
                </Form.Group> */}
                {knowledgeEntries.map(([item, value]) => (
                    item !== 'uncommon' &&
                    (<Form.Group
                        controlId={item}
                        key={`${item}`}
                    >
                        <Form.Label>{translator.knowledge[item]}</Form.Label>
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-1`}
                            checked={value >= 1}
                            disabled={value >= 2}
                            onClick={() => {
                                if (value === 1) {
                                    changeKnowledge(item, 0);
                                }
                                if (value === 0) {
                                    changeKnowledge(item, 1);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-2`}
                            checked={value >= 2}
                            disabled={value === 3 || value < 1}
                            onClick={() => {
                                if (value === 2) {
                                    changeKnowledge(item, 1);
                                }
                                if (value === 1) {
                                    changeKnowledge(item, 2);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`${item}-3`}
                            checked={value === 3}
                            disabled={value < 2}
                            onClick={() => {
                                if (value === 3) {
                                    changeKnowledge(item, 2);
                                }
                                if (value === 2) {
                                    changeKnowledge(item, 3);
                                }
                            }}
                        />
                    </Form.Group>)
                ))}
                {uncommonKnowledgeEntries.map(([item, value]) => (
                    <Form.Group
                        controlId={item}
                        key={`uncommon-${item}`}
                    >
                        <Form.Label>{translator.knowledge.uncommon[item]}</Form.Label>
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`uncommon-${item}-1`}
                            checked={value >= 1}
                            disabled={value >= 2}
                            onClick={() => {
                                if (value === 1) {
                                    changeUncommonKnowledge(item, 0);
                                }
                                if (value === 0) {
                                    changeUncommonKnowledge(item, 1);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`uncommon-${item}-2`}
                            checked={value >= 2}
                            disabled={value === 3 || value < 1}
                            onClick={() => {
                                if (value === 2) {
                                    changeUncommonKnowledge(item, 1);
                                }
                                if (value === 1) {
                                    changeUncommonKnowledge(item, 2);
                                }
                            }}
                        />
                        <Form.Check
                            inline
                            name={item}
                            type="checkbox"
                            id={`uncommon-${item}-3`}
                            checked={value === 3}
                            disabled={value < 2}
                            onClick={() => {
                                if (value === 3) {
                                    changeUncommonKnowledge(item, 2);
                                }
                                if (value === 2) {
                                    changeUncommonKnowledge(item, 3);
                                }
                            }}
                        />
                    </Form.Group>
                ))}
            </Container>
        </section>
        <section className='d-flex justify-content-center'>
            <p>Acredito que faltam classe e raça, o que já existe na ficha e não está aqui, preciso entender melhor(talentos, domínios, mutações e etc)</p>
            <Button variant="primary" type="submit">Salva (mas ainda não faz nada)</Button>
        </section>
        </>
    )
}

export default Character;

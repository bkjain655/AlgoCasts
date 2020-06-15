const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});

test('fromLast returns the node n elements from the end, Case is 0', () => {
  const l = new List();
  expect(fromLast(l, 0)).toEqual(null);
});

test('fromLast returns the node n elements from the end, Case is 2', () => {
  const l = new List();
  l.insertLast('a');
  l.insertLast('b');
  expect(fromLast(l, 0).data).toEqual('b');
  expect(fromLast(l, 1).data).toEqual('a');
  expect(fromLast(l, 2).data).toEqual('a');
});
